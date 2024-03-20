"use client"
import style from "../../public/styles/Experience.module.css"
import ExperienceCard from "./ExperienceCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from "swiper/modules"
import { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience(){

    useEffect(() => {
        AOS.init({
            duration: 200, // Duración de la animación
        });
    }, []);

    return(
        <div className={style.experience}>
            <div className={style.bx}>
                <div className={style.headerAbout}>
                    <h1 data-aos="zoom-in">Experience</h1>
                </div>
                <div className={style.projects}>

                <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{type: 'fraction'}}
                        modules={[Pagination, Navigation]}
                        scrollbar={{ draggable: true }}
                        coverflow = {true}
                    >
                        <SwiperSlide>
                            <ExperienceCard url="/images/wallet.png" name="Wallet" urlGh = "/" urlDep = "/" tec1 = "Next.js" tec2 = "Javascript"/>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExperienceCard url="/images/store.png" name="E-commerce" urlGh = "/" urlDep = "/" tec1 = "Next.js" tec2 = "Typescript" />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <ExperienceCard url="/images/dex.png" name="Yield Farming Platform" urlGh = "/" urlDep = "/" tec1 = "React" tec2 = "Javascript" />
                            
                        </SwiperSlide>
    </Swiper>
                </div>


            </div> 
        </div>
    )
}