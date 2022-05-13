import React from "react";
import "../style/ContactStyle.css"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactUs(){

    const DisplayOK = ()=>{
        toast.success(`Thanks for your message`,
            {
            position:"top-center",
            theme:"colored",
            autoClose:4000,
            pauseOnHover: true,
            closeButton:true,
            hideProgressBar :true, 
        })
    }

        const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_qpeh68l', "template_hrh488m", e.target, 'U_GlMgYbkR-KomJMW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            DisplayOK()
            e.target.reset()
  
        };

    return(
        <section id="contact">
            <div className="sectionheader">	<h1>CONTACT</h1></div>
            <article>
            <p>Contact Us to get information</p>
                    <label htmlFor="checkcontact" className="contactbutton"><div className="mail"></div></label><input id="checkcontact" type="checkbox" />
                    <form action="" method="post" className="contactform" onSubmit={sendEmail}>
                        <p className="input_wrapper"><input type="text" name="name"    id ="contact_nom" /><label htmlFor="contact_nom">NAME</label></p>
                        <p className="input_wrapper"><input type="text" name="email"  id ="contact_email" required/><label htmlFor="contact_email">EMAIL</label></p>
                        <p className="input_wrapper"><input type="text" name="subjet"  id ="contact_sujet"/><label htmlFor="contact_sujet">SUBJECT</label></p>
                        <p className="textarea_wrapper"><textarea name="message" id="contact_message"></textarea></p>
                        <p className="submit_wrapper"><input type="submit" value="Send"/></p>			
                    </form>
            </article>
            <ToastContainer />
        </section>
    )
}