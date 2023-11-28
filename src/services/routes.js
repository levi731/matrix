import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import App from "../App";
import validateAccess from "./validateAccess";
import MainContainer from "../Containers/mainContainer";
import { SignUp } from "../Login/signUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"login", element:<Login />},
            {path:"signUp", element:<SignUp />},
            {path:"/", loader:validateAccess,
            children:[
            ]
        }
        ]
    }
])

export default router;