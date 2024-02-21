import style from "../../public/styles/Experience.module.css"
import { IoWalletOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { PiCoin } from "react-icons/pi";
import { MdOutlineLabel } from "react-icons/md";
import Image from "next/image"

export default function Experience(){
    return(
        <div className={style.experience}>
            <div className={style.bx}>
                <div className={style.headerAbout}>
                    <h1>Experience</h1>
                    <div className={style.text}>
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
                        {/*<p>   HTML, CSS, Typescript, Javascript, React, Next, Vite, Git, Github</p>*/}
                    </div>
                </div>
                <div className={style.projects}>
                    <div className={style.imageCont}>
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
                            <Image src = "/images/dex.png"
                                alt="Descripción de la imagen"
                                layout="fill"
                                objectFit="cover"
                                className={style.image}></Image>
                        </div>
                        <div className={style.iconBx}><BsHouse  className={style.icon}/></div>
                        <div className={style.imageText}>{/*Real Estate*/} Investment Platform</div>
                    </div>

                    {/*<div className={style.imageCont}>
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
                </div>

            </div> 
        </div>
    )
}