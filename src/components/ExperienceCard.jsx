

import style from "../../public/styles/ExperienceCard.module.css"
import style1 from "../../public/styles/Home.module.css"
import { PiCoin } from "react-icons/pi";
import Image from "next/image"
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ExperienceCard({url, icon, name, urlGh, urlDep, tec1, tec2}){

    useEffect(() => {
        AOS.init({
          duration:200
      });
      }, []);


    return(

        <div className={style.cardBx}>
            <div className={style.imageCont} >
                <div className={style.imageBx}>
                    <Image src = {url}
                        alt="Descripción de la imagen"
                        layout="fill"
                        objectFit="cover"
                        className={style.image}></Image>
                </div>
                <div className={style.iconBx}><PiCoin  className={style.icon}/></div>
                <div className={style.imageText}>{name}</div>
            </div>
            <div className={style.info}>
                <h2>{name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quo provident totam quae necessitatibus voluptates? Beatae quam ea ex culpa, suscipit quaerat tempore fugit ipsum possimus laboriosam nobis exercitationem animi.</p>

                <div className={style.skills}>
                    {`{ ${tec1}, ${tec2} }`} 
                </div>
                <div className={style1.btnBx}>
                    <Link href={urlGh}>
                        <div className={style1.btn}>
                            <FiGithub className ={style1.icon}/>
                        </div>
                    </Link>
                    <Link href={urlDep}>
                        <div className={style1.btn}>
                            <HiOutlineExternalLink className ={style1.icon}/>
                        </div>
                    </Link>
                
           </div>
            </div>
        </div>
        
    )
}