"use client"
import Home from "../components/Home"
import style from "../../public/styles/Principal.module.css"
import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"
import { useState, useEffect } from "react"


export default function PrincipalPage(){

    /*const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); 
     }, []);



    if (!isMounted) {
        return (null)
    }*/

    return(
        <div className={style.cont}>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
        </div>

    )
}