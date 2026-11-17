import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
// import { store } from "./store";
import App from "./App";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  // </Provider>
);
