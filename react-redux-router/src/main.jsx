import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from "./App.jsx"
import { Provider } from 'react-redux'
import {store} from "./redux/store.js"
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </Provider>
);

