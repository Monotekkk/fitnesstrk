import React from "react";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import  App  from "./components/app/app";
import {store} from "./service/store/store";
import { createRoot } from 'react-dom/client';
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(  <React.StrictMode>
  <Provider store={store}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </Provider>
</React.StrictMode>,);