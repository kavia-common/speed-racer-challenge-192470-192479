/// <reference types="astro/client" />

/**
 * Declares public environment variables available via import.meta.env.*
 * Only PUBLIC_* variables are exposed to client in Astro.
 */
interface ImportMetaEnv {
  readonly PUBLIC_API_BASE?: string;
  readonly PUBLIC_BACKEND_URL?: string;
  readonly PUBLIC_FRONTEND_URL?: string;
  readonly PUBLIC_WS_URL?: string;
  readonly PUBLIC_NODE_ENV?: 'development' | 'production' | 'test';
  readonly PUBLIC_NEXT_TELEMETRY_DISABLED?: string;
  readonly PUBLIC_ENABLE_SOURCE_MAPS?: string;
  readonly PUBLIC_PORT?: string;
  readonly PUBLIC_TRUST_PROXY?: string;
  readonly PUBLIC_LOG_LEVEL?: 'debug' | 'info' | 'warn' | 'error' | string;
  readonly PUBLIC_HEALTHCHECK_PATH?: string;
  readonly PUBLIC_FEATURE_FLAGS?: string; // JSON string or comma list
  readonly PUBLIC_EXPERIMENTS_ENABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
