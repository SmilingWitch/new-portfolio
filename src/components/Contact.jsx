import style from "../../public/styles/Contact.module.css"

export default function Contact(){
    return(
        <div className={style.contact}>
            <div className={style.bx}>
               <h1>Contact Me</h1>
                <form className={style.form}>
                    <div className={style.inputs}>
                        <div  className={style.inputBx}>
                            <input type = "text" placeholder="Your name"></input>
                            <input type = "email" placeholder="Your email address"></input>
                            <input type = "text" placeholder="Subject"></input>
                        </div>

                        <div className={style.message}>
                            <textarea id="parrafo" name="parrafo" rows="4" cols="50" placeholder="Type here your message...">

                            </textarea>
                        </div>

                    </div>
                    

                    <div className={style.btn}>
                        <input type="submit" value="Send"></input>
                    </div>
                </form>

            </div>
            
        </div>
    )
}