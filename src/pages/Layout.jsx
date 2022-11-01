import React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "../Navigation.jsx";

export default function Layout (){
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}