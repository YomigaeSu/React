import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://c7960d1467574dab8d30878b9570b274@sentry.io/1391980"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
