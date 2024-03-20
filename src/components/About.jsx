import style from "../../public/styles/About.module.css"
import Image from "next/image"
import { IoCameraOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function About({animation}){   

    useEffect(() => {
        AOS.init({
            duration: 200, // Duración de la animación
        });
        console.log("ANIMATION")
    }, [animation]);
    

    return(
        <div className={style.about} >
            <div className={style.aboutBx}>
                
                <div className={style.headerAbout}>
                    <h1 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">About Me</h1>
                    <div className={style.text}>
                        <p>I am a passionate biomedical engineer with a strong interest in web development. My fascination with technology and desire to create innovative solutions led me to delve into the world of web development. Currently, I am expanding my skills in the field of design to complement my web development experience. I love exploring new ideas and finding ways to combine my passion for technology with visually appealing aesthetics.</p>
                    </div>
                </div>
                <div className={style.imageCont}>
                    <div className={style.imageBx}/>
                    <div className={style.iconBx}><IoCameraOutline className={style.icon}/></div>
                    <div className={style.imageText}>Carried away by a CSS code</div>
                </div>
            </div>
                <div className={style.skills}>
                    <h2>Skills: </h2> 
                    <div className={style.labelBx}>
                        <div className={style.label}> HTML</div>
                        <div className={style.label}> CSS</div>
                        <div className={style.label}> Typescript</div>
                        <div className={style.label}> Javascript</div>
                        <div className={style.label}> React</div>
                        <div className={style.label}> Next</div>
                        <div className={style.label}> Vite</div>
                        <div className={style.label}> Git</div> 
                        <div className={style.label}> Github</div>
                    </div>
                </div>
        </div>
    )
}