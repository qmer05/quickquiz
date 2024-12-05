import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import './index.css'
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Trucks from "./pages/Trucks.jsx";
import Drivers from "./pages/Drivers.jsx";
import RegisterDriver from "./pages/RegisterDriver.jsx";
import TruckCard from "./pages/TruckCard.jsx";
import DriverCard from "./pages/DriverCard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />{" "}
      <Route path="home" element={<Home />} />
      <Route path="trucks" element={<Trucks />} />
      <Route path="drivers" element={<Drivers />} />
      <Route path="register-driver" element={<RegisterDriver />} />
      <Route path="trucks/:id" element={<TruckCard />} />
      <Route path="drivers/:id" element={<DriverCard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
