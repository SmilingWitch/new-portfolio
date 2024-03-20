"use client"
import Home from "../components/Home"
import style from "../../public/styles/Principal.module.css"
import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"
import { useState, useEffect } from "react"
import ExperienceCard from "./ExperienceCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination,  Scrollbar, A11y, Parallax} from "swiper/modules"
import AOS from "aos"


export default function PrincipalPage(){

    useEffect(() => {
        AOS.init({
            duration: 200, // Duración de la animación
        });
    }, []);
    
    const [animation, SetAnimation] = useState(0) 
    

    return(
        <div className={style.cont}>
            <div className={style.background}></div>
            <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        modules={[Navigation, Pagination, Scrollbar,Parallax, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        parallax={true}
                        onSlideChange={(swiper) => {
                            console.log("Slide actual:", swiper.activeIndex);
                            SetAnimation(swiper.activeIndex)
                          }}
                        /*onSlideChangeTransitionEnd={() => {
                            // Aplica la animación al texto en Experience
                            const experienceText = document.querySelector('.header');
                            const name = document.querySelectorAll('.font');
                            const ocupation = document.querySelector('.occ');
                            console.log("NAME", name)
                            if (experienceText) {
                                experienceText.classList.add('fade-in');
                                // Remueve la clase después de que la animación haya terminado para que pueda volver a aplicarse
                                setTimeout(() => {
                                    experienceText.classList.remove('fade-in');
                                }, 1000); // Ajusta el tiempo según la duración de tu animación
                            }
                            if (ocupation) {
                                ocupation.classList.add('occAnim');
                                // Remueve la clase después de que la animación haya terminado para que pueda volver a aplicarse
                                setTimeout(() => {
                                    ocupation.classList.remove('occAnim');
                                }, 1000); // Ajusta el tiempo según la duración de tu animación
                            }
                            if (name)  {
                                name.forEach((element) => {
                                  element.classList.add('show');
                                  setTimeout(() => {
                                    element.classList.remove('show');
                                  }, 8000);
                                });
                              }
                            }}*/
                    >
                        <SwiperSlide >
                            <Home />
                        </SwiperSlide>
                        <SwiperSlide>
                            <About animation = {animation}/>  
                        </SwiperSlide>
                        <SwiperSlide>
                            <Experience/> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <Contact/> 
                        </SwiperSlide>
                    </Swiper>
            
            
            
            
        </div>

    )
}