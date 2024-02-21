import style from "../../public/styles/Contact.module.css"

export default function Contact(){
    return(
        <div className={style.contact}>
            <div className={style.bx}>
               <h1>Contact Me</h1>
                <form className={style.form}>
                    <div  className={style.inputBx}>
                        <input type = "text" placeholder="Your name"></input>
                        <input type = "email" placeholder="Your email address"></input>
                        <input type = "text" placeholder="Subject"></input>
                    </div>

                    <div className={style.message}>
                        <input type = "text" placeholder="Type here your message"></input>
                    </div>
                </form>

            </div>
            
        </div>
    )
}