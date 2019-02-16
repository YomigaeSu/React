import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://c7960d1467574dab8d30878b9570b274@sentry.io/1391980"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
