import * as sapper from '@sapper/app';
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://74f47fdc9cbe4c22a4324af27e9d27e6@o502207.ingest.sentry.io/5678291",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

sapper.start({
	target: document.querySelector('#sapper')
});
