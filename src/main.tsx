import React from "react"
import ReactDOM from "react-dom/client"
import { Routes, Route, HashRouter } from "react-router-dom"
import routes from "./routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {routes.map((route, i: Number) => (
          <Route key={String(i)} path={route.path} element={route.page} />
        ))}
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
