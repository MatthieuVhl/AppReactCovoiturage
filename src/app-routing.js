import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/Auth/LoginPage";
import RegisterPage from "./routes/Auth/RegisterPage";
import ProtectedRoute from "./component/ProtectedRoute";
import CommentPage from "./routes/Comment/CommentPage";
import ProfilPage from "./routes/Profil/ProfilPage";
import CarRidePage from "./routes/CarRide/CarRidePage/CarRidePage";
import CreateCarRidePage from "./routes/CreateCarRide/CreateCarRidePage";



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
      }, 
      {
        path:"/carride",
        element:<CarRidePage/>,
  
      },
      {
        path:"/carride/add",
        element:<ProtectedRoute><CreateCarRidePage/></ProtectedRoute> 
      }, 
    {
      path:"/comment/:id",
      element: <ProtectedRoute><CommentPage/></ProtectedRoute>,
    },
    {
      path:"/profil",
      element:<ProtectedRoute><ProfilPage/></ProtectedRoute> 
    }
    ]
  }
])

export default router