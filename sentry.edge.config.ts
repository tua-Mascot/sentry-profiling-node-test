import * as Sentry from '@sentry/nextjs';
import { isSentryEnabled } from './sentry.helpers';

if (isSentryEnabled) {
  Sentry.init({
    debug: false,

    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    tracesSampleRate: 1.0
  });
}
