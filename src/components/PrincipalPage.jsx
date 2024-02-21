import Home from "../components/Home"
import style from "../../public/styles/Principal.module.css"
import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"



export default function PrincipalPage(){
    return(
        <div className={style.cont}>
            <Home/>
            <About/>
            <Experience/>
            <Contact/>
        </div>

    )
}