"use client"
import style from "../../public/styles/Experience.module.css"
import { IoWalletOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { PiCoin } from "react-icons/pi";
import { MdOutlineLabel } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import Image from "next/image"
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Experience(){

    const settings = {
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 200,
        fade : false ,
      
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 1,
              arrows: true,
              
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              centerMode: false, // Habilita el modo de centrado
            },
          },
          {
            breakpoint: 864,
            settings: {
              slidesToShow: 1,
              initialSlide: 1,
              arrows: false,
              centerMode: false, // Habilita el modo de centrado
    
            },
          },
    
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: true, // Habilita el modo de centrado
              arrows:false,
            },
          },
          {
            breakpoint: 564,
            settings: {
              slidesToShow: 1,
              centerMode: true, // Habilita el modo de centrado
              arrows:false,
    
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerMode: false, // Habilita el modo de centrado
              arrows:false,
            },
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              centerMode: true, // Habilita el modo de centrado
              arrows:false,
            },
          },
        ],
      };






    return(
        <div className={style.experience}>
            <div className={style.bx}>
                <div className={style.headerAbout}>
                    <h1>Experience</h1>
                </div>
                <div className={style.projects}>
                    {/*<div className={style.imageCont}>
                        <div className={style.imageBx}>
                            <Image src = "/images/wallet.png"
                                alt="Descripción de la imagen"
                                layout="fill"
                                objectFit="cover"
                                className={style.image}></Image>
                        </div>
                        <div className={style.iconBx}><IoWalletOutline  className={style.icon}/></div>
                        <div className={style.imageText}>Wallet</div>
                    </div>

                    <div className={style.imageCont}>
                        <div className={style.imageBx}>
                            <Image src = "/images/store.png"
                                alt="Descripción de la imagen"
                                layout="fill"
                                objectFit="cover"
                                className={style.image}></Image>
                        </div>
                        <div className={style.iconBx}><MdOutlineStorefront  className={style.icon}/></div>
                        <div className={style.imageText}>E-commerce</div>
                    </div>

                    <div className={style.imageCont}>
                        <div className={style.imageBx}>
                            <Image src = "/images/dex.png"
                                alt="Descripción de la imagen"
                                layout="fill"
                                objectFit="cover"
                                className={style.image}></Image>
                        </div>
                        <div className={style.iconBx}><PiCoin  className={style.icon}/></div>
                        <div className={style.imageText}>Yield Farming Platform</div>
                    </div>*/}

                                <Slider {...settings} arrows = {true}>
                                    <div className={style.cardBx}>
                                        <ExperienceCard url = "/images/wallet.png"  name = "Wallet"/>
                                        <h1>Wallet</h1>
                                    </div>
                                    <div className={style.cardBx}>
                                        <ExperienceCard url = "/images/store.png"  name = "E-commerce"/>
                                        <h1>E-commerce</h1>
                                    </div>
                                    <div className={style.cardBx}>
                                        <ExperienceCard url = "/images/dex.png"  name = "Yield Farming Platform"/>
                                        <h1>Yield Farming Platform</h1>
                                    </div>
       
                                    
                                </Slider>
                    
                </div>

            </div> 
        </div>
    )
}