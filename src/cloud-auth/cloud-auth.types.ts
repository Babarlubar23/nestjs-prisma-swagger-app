export type CloudServiceKind = 'postgres' | 'redis';

export interface CloudConnectionInfo {
  url: string;
  accessToken: string;
  expiresOn: Date;
}
