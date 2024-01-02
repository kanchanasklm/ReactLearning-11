
/** 
import React from "react";

import ReactDOM from "react-dom/client";  

import Header from "./components/Header";

import Body from "./components/Body";

import Footer from "./components/Footer";

import About from "./components/About";

import Error from "./components/Error";

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";

import Profile from "./components/Profile";
import Instamart from "./components/Instamart";




            //  * Header
            //  *   -Logo
            //  *   -NavItems
            //  *   -Cart
            //  *   
            //  *   Body
            //  *     -SearcHbar
            //  *     -restaurantList
            //  *     -restaurantCard
            //  *       -Image
            //  *       -Name
            //  *       -Rating
            //  *       -Cuisines
            //  * 
            //  *    Footer
            //  *     -Links 
            //  *     -CopyRights
            //  * 
            //  *  
            //  * 
             






const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
            
        
    );
};

const appRouter=createBrowserRouter([
    {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
        path:"/",
        element:<Body/>,
    },
    {
        path:"/about",
        element:<About/>,
        children:[
            {
                path:"Profile",
                element:<Profile/>,
            },
        ]
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
    },

    {
        path:"/instamart",
        element:<Instamart/>,
    },
    ]
    },

    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

*/



import React,{lazy,Suspense} from "react";

import ReactDOM from "react-dom/client";  

import Header from "./components/Header";

import Body from "./components/Body";

import Footer from "./components/Footer";



import Error from "./components/Error";

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";

import Profile from "./components/Profile";

import Shimmer from "./components/Shimmer";

const Instamart=lazy(()=>import("./components/Instamart"));

const About=lazy(()=>import("./components/About"));



/**
             * Header
             *   -Logo
             *   -NavItems
             *   -Cart
             *   
             *   Body
             *     -SearcHbar
             *     -restaurantList
             *     -restaurantCard
             *       -Image
             *       -Name
             *       -Rating
             *       -Cuisines
             * 
             *    Footer
             *     -Links 
             *     -CopyRights
             * 
             *  
             * 
             */ 






const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
            
        
    );
};

const appRouter=createBrowserRouter([
    {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
        path:"/",
        element:<Body/>,
    },
    {
        path:"/about",
        element:<Suspense
        fallback={<Shimmer/>}><About/></Suspense>,
        children:[
            {
                path:"Profile",
                element:<Profile/>,
            },
        ]
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
    },

    {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
    },
    ]
    },

    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

