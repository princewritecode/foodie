import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
function AppLayOut() {
    return (
        <>
            <Header></Header>
            <Body></Body>
        </>
    );
}

const appRouter = createBrowserRouter(
    [
        { path: "/", element: <AppLayOut></AppLayOut> },
        { path: "/about", element: <About></About> },
        { path: "/contact", element: <Contact></Contact> }
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);