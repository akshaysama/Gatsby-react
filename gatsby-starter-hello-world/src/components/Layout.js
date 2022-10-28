import React from "react"
import NavBar from "./NavBar"
export default function Layout ({children}){
    return (
        <div className="layout">
<NavBar />
<div className="content">
    {children}
</div>
<footer>
    <p>Copyright 2021 web warrior</p>
</footer>
<p>Copyright 2021 web warrior</p>
        </div>
    )
}