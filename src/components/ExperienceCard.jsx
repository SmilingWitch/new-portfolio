"use client"

import style from "../../public/styles/ExperienceCard.module.css"
import style1 from "../../public/styles/Home.module.css"
import { PiCoin } from "react-icons/pi";
import Image from "next/image"
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ExperienceCard({url, icon, name}){
    return(

        <div className={style.cardBx}>
            <div className={style.imageCont}>
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
                <h2>Wallet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quo provident totam quae necessitatibus voluptates? Beatae quam ea ex culpa, suscipit quaerat tempore fugit ipsum possimus laboriosam nobis exercitationem animi.</p>

                <div className={style.skills}>
                    {"{ Javascript, Next }"} 
                </div>
                <div className={style1.btnBx}>
                <div className={style1.btn}>
                    <FiGithub className ={style1.icon}/>
                </div>
                <div className={style1.btn}>
                    <HiOutlineExternalLink className ={style1.icon}/>
                </div>
           </div>
            </div>
        </div>
        
    )
}