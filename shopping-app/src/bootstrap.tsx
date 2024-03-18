import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });
const mount = (
  el: HTMLElement,
  { onNavigate }: { onNavigate?: (path: string) => void }
) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <HistoryRouter history={history}>
        <App onNavigate={onNavigate} />
      </HistoryRouter>
    </React.StrictMode>
  );
  return {
    onParentNavigate(pathname: string) {
      history.push(pathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const divEl = document.getElementById("shopping-root") as HTMLElement;
  if (divEl) {
    mount(divEl, {});
  }
}

export { mount };
