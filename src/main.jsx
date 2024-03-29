import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { MainContextProvider } from "./context/MainContext.jsx"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <Toaster />
    <App />
  </MainContextProvider>
)
