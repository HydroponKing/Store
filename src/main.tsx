import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
