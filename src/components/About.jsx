import style from "../../public/styles/About.module.css"
import Image from "next/image"
import { IoCameraOutline } from "react-icons/io5";

export default function About(){   
    return(
        <div className={style.about}>
            <div className={style.imageCont}>
                <div className={style.imageBx}/>
                <div className={style.iconBx}><IoCameraOutline className={style.icon}/></div>
                <div className={style.imageText}>Carried away by a CSS code</div>
            </div>
            <div className={style.headerAbout}>
                <h1>About Me</h1>
                <div className={style.text}>
                    <p>I am a passionate biomedical engineer with a strong interest in web development. My fascination with technology and desire to create innovative solutions led me to delve into the world of web development. Currently, I am expanding my skills in the field of design to complement my web development experience. I love exploring new ideas and finding ways to combine my passion for technology with visually appealing aesthetics.</p>
                </div>
            </div>
            
        </div>
    )
}