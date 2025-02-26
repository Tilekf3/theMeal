import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Flag from "./pages/Flag";


export const myRouter4 = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"search/:text",
                element:<Search/>
            },
            {
                path:"flag/:value",
                element:<Flag/>
            },
        ]
    }
])