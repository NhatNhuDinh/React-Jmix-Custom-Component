import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { createRoot, type Root } from "react-dom/client";
import "./index.css";

export class CustomTable extends HTMLElement {
  private root?: Root;

  connectedCallback() {
    this.style.display = "block";

    // render React trực tiếp vào custom element
    this.root = createRoot(this);
    this.root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = undefined;
  }
}

if (!customElements.get("custom-table")) {
  customElements.define("custom-table", CustomTable);
}
