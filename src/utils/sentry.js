import * as Sentry from '@sentry/browser';

export function initSentry() {
  Sentry.init({
    dsn: import.meta.env.VITE_PUBLIC_SENTRY_DSN,
    environment: import.meta.env.VITE_PUBLIC_APP_ENV,
    initialScope: {
      tags: {
        type: 'frontend',
        projectId: import.meta.env.VITE_PUBLIC_APP_ID
      }
    }
  });
}

export function logError(error, context = {}) {
  console.error(error);
  Sentry.withScope(scope => {
    Object.entries(context).forEach(([key, value]) => {
      scope.setExtra(key, value);
    });
    Sentry.captureException(error);
  });
}