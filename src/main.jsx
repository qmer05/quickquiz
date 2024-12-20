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
import Quizzes from "./pages/Quizzes.jsx";
import Highscores from "./pages/Highscores.jsx";
import QuizDetail from "./pages/QuizDetail.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />{" "}
      <Route path="/home" element={<Home />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/quizgame" element={<QuizDetail />} />
      <Route path="highscore" element={<Highscores />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
