import * as Sentry from '@sentry/nextjs';
import { isSentryEnabled } from './sentry.helpers';

if (isSentryEnabled) {
  Sentry.init({
    debug: false,

    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    tracesSampleRate: 1.0,

    replaysOnErrorSampleRate: 1.0,

    replaysSessionSampleRate: 0.1,

    integrations: [
      new Sentry.Replay({
        maskAllText: true,
        blockAllMedia: true
      }),
      new Sentry.BrowserTracing()
    ]
  });
}
