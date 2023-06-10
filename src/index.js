import React from "react";
import ReactDOM from "react-dom/client";
// import "../node_modules/"
import "./index.css";
// import "./datapicker.css"
import "./CustomRsuite.css";
import "./modification.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ContextWrapper from "./Pages/Pages/User/My-Schedule/CalendarContext/ContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <ContextWrapper> */}
        <App />
        {/* </ContextWrapper> */}
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
