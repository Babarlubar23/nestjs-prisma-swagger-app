import { Injectable } from '@nestjs/common';
import { ManagedIdentityCredential, TokenCredential, AccessToken } from '@azure/identity';

export type CloudServiceKind = 'postgres' | 'redis';

export interface CloudConnectionInfo {
  url: string;
  accessToken: string;
  expiresOn: Date;
}

@Injectable()
export class CloudAuthService {
  private credential: TokenCredential;
  private tokenCache: { [key: string]: AccessToken } = {};

  constructor() {
    // Uses the managed identity assigned to the pod (UAMI)
    this.credential = new ManagedIdentityCredential();
  }

  private getScope(kind: CloudServiceKind): string[] {
    return kind === 'postgres'
      ? ['https://ossrdbms-aad.database.windows.net/.default']
      : ['https://redis.azure.com/.default'];
  }

  async getConnectionInfo(url: string, kind: CloudServiceKind): Promise<CloudConnectionInfo> {
    const cacheKey = `${kind}:${url}`;
    const cached = this.tokenCache[cacheKey];
    const now = Date.now();

    // If cached token exists and is not expired (with 2 min buffer), use it
    if (cached && cached.expiresOnTimestamp > now + 2 * 60 * 1000) {
      return {
        url,
        accessToken: cached.token,
        expiresOn: new Date(cached.expiresOnTimestamp),
      };
    }

    // Otherwise, request new token (Azure SDK handles refresh tokens internally)
    const scopes = this.getScope(kind);
    const tokenResponse = await this.credential.getToken(scopes);

    if (!tokenResponse) {
      throw new Error('Failed to acquire access token');
    }

    // Cache the new token
    this.tokenCache[cacheKey] = tokenResponse;

    return {
      url,
      accessToken: tokenResponse.token,
      expiresOn: new Date(tokenResponse.expiresOnTimestamp),
    };
  }
}
