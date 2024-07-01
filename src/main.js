import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import routes from "./routes";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(HashRouter, { children: _jsx(Routes, { children: routes.map((route, i) => (_jsx(Route, { path: route.path, element: route.page }, String(i)))) }) }) }));
