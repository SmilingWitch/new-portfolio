"use client"
import style from "../../public/styles/Home.module.css"

import Image from "next/image"
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { useEffect } from "react";


export default function Home(){

    useEffect(() => {
        const text = document.querySelector('.text p')
        text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i *  8.2}deg)">${char}</span>`).join("")
      }, []);

    return(
        <div className={style.bx}>
            <div className={style.body}>
                <div className={style.circle}>
                <div className={style.logo}>2024</div>
                    <div className="text">
                      <p>Retro - Portfolio - Retro </p>
                    </div>
                </div>
            </div>
            <div className={style.header}>

                <div className={style.info}>
                    <div className={style.textHeader}>
                      <h1>Hi, I&apos;m</h1>  <h1>Daniela Yero</h1>
                    </div>
                    
                    <h3>{"< Frontend Developer />"}</h3>
                </div>
                
            </div>
           <div className={style.btnBx}>
                <div className={style.btn}>
                    <FiGithub className ={style.icon}/>
                </div>
                <div className={style.btn}>
                    <SlSocialLinkedin className ={style.icon}/>
                </div>
                <div className={style.btn}>
                    <FiInstagram className ={style.icon}/>
                </div>
                <div className={style.btn}>
                    <SlSocialFacebook className ={style.icon}/>
                </div>
           </div>
            
        </div>
    )
}