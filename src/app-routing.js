import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/Auth/LoginPage";
import RegisterPage from "./routes/Auth/RegisterPage";

import CreateJourneyPage from "./routes/CreateJourney/CreateJourneyPage";
// import CarRidePage from "./routes/CarRidePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      }
    //   {
    //     path: "/createjourney",
    //     element: <CreateJourneyPage/>
    //   },
    //   {
    //     path:"/carride",
    //     element:<CarRidePage/>
    //   }
    ]
  }
])

export default router