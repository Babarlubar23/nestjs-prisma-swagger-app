# CloudAuth Module

This module provides a service for securely acquiring connection information (access tokens, URLs) for Azure PostgreSQL and Redis using managed identity (UAMI) and OIDC. It is compatible with NestJS dependency injection.

## Usage

Inject `CloudAuthService` into your service or controller and call `getConnectionInfo(url, kind)` to get the access token and connection info for the specified service.

## Dependencies
- @azure/identity
- pg (for PostgreSQL client)
- ioredis (for Redis client)

## Example
```typescript
const info = await cloudAuthService.getConnectionInfo(
  'your-postgres-url',
  'postgres'
);
```
