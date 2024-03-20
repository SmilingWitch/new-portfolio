"use client"
import style from "../../public/styles/Home.module.css"

import Image from "next/image"
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { useEffect, useRef } from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home(){

    useEffect(() => {
        AOS.init({
            duration:200
        });
        const text = document.querySelector('.text p')
        text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i *  8.2}deg)">${char}</span>`).join("")
      }, []);

      



    return(
        <div className={`${style.bx} header`}>
            <div className={style.body}>
                <div className={style.circle} >
                <div className={style.logo}>2024</div>
                    <div className="text">
                      <p>Retro - Portfolio - Retro </p>
                    </div>
                </div>
            </div>
            <div className={style.header}>

                <div className={style.info}>
                    <div className={`${style.textHeader} `}>
                      <h1 className="header">Hi, I&apos;m</h1>        
                        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.2} >
                        <div className={style.header1}>
                          <MouseParallaxChild factorX={0.3} factorY={0.5}>
                            <span style = {{"--i":2}} className="font">D</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.5} factorY={0.7}>
                            <span style = {{"--i":2}} className="font">A</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.7} factorY={0.8}>
                            <span style = {{"--i":2}} className="font">N</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.3} factorY={0.9}>
                            <span style = {{"--i":2}} className="font">I</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.5} factorY={0.9}>
                            <span style = {{"--i":2}} className="font">E</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.7} factorY={0.9}>
                            <span style = {{"--i":2}} className="font">L</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.7} factorY={0.9}>
                            <span style = {{"--i":2}} className="font">A</span>
                          </MouseParallaxChild>
                            <span className={style.space}>  </span>
                          <MouseParallaxChild factorX={0.3} factorY={-0.5}>
                            <span style = {{"--i":2.2}} className="font">Y</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.5} factorY={-0.7}>
                            <span style = {{"--i":2.2}} className="font">E</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.7} factorY={-0.8}>
                            <span style = {{"--i":2.2}} className="font">R</span>
                          </MouseParallaxChild>
                          <MouseParallaxChild factorX={0.3} factorY={-0.9}>
                            <span style = {{"--i":2.2}} className="font">O</span>
                          </MouseParallaxChild>

                        </div>
                    </MouseParallaxContainer>
                        
                    </div>
                    
                    <h3 className="occ">{"< Frontend Developer />"}</h3>
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