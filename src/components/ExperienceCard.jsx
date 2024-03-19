"use client"

import style from "../../public/styles/ExperienceCard.module.css"
import { PiCoin } from "react-icons/pi";
import Image from "next/image"

export default function ExperienceCard({url, icon, name}){
    return(
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
    )
}