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
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

export default function Experience(){


  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); 
     }, []);



    



  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
       <div
         className={className}
         onClick={onClick}
         style={{ ...style, fontSize: '30px' }} // Ajusta el tamaño de las flechas aquí
       >
         <AiOutlineArrowLeft />
       </div>
    );
   };

   const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
       <div
         className={className}
         onClick={onClick}
         style={{ ...style, fontSize: '30px' }} // Ajusta el tamaño de las flechas aquí
       >
         <AiOutlineArrowRight />
       </div>
    );
   };

    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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


      if (!isMounted) {
        return (null)
    }



    return(
        <div className={style.experience}>
            <div className={style.bx}>
                <div className={style.headerAbout}>
                    <h1>Experience</h1>
                </div>
                <div className={style.projects}>
                      <Slider {...settings} arrows = {true}>
                              <ExperienceCard url = "/images/wallet.png"  name = "Wallet"/>
                              <ExperienceCard url = "/images/store.png"  name = "E-commerce"/>

                              <ExperienceCard url = "/images/dex.png"  name = "Yield Farming Platform"/>
                      </Slider>
                    
                </div>

            </div> 
        </div>
    )
}