

import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

// Get the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  // Safely create the root
  const root = createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found");
}
