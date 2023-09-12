import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
function AppLayOut() {
    return (
        <>
            <Header></Header>
            <Outlet> </Outlet>
        </>
    );
}
const appRouter = createBrowserRouter(
    [
        {
            path: "/", element: <AppLayOut></AppLayOut>, children: [
                { path: "/", element: <Body></Body> },
                { path: "/about", element: <About></About> },
                { path: "/contact", element: <Contact></Contact> },
                { path: "restaurants/:resId", element: <RestaurantMenu></RestaurantMenu> }
            ], errorElement: <Error></Error>
        }
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);