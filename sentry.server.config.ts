import * as Sentry from '@sentry/nextjs';
import { ProfilingIntegration } from '@sentry/profiling-node';
import { isSentryEnabled } from './sentry.helpers';

if (isSentryEnabled) {
  Sentry.init({
    debug: false,

    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    tracesSampleRate: 1.0,

    profilesSampleRate: 1.0,

    integrations: [
      new ProfilingIntegration()
    ]
  });
}
