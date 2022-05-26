import React from "react";
import "../style/About2.css"
import Malek from "../image/WhatsApp Image 2020-06-28 at 1.25.34 PM.png"
import Islam from "../image/MD.png"
import Ismail from "../image/ismail.png"
import Mohammad from "../image/mohammad.png"

export default function About2(){
    return(
        <div className="team-section" id="About-us-page">
            <h1>About Us</h1>
            <h1>Click on image to read more about each one</h1>
            <span className="border"></span>
            <div className="ps">
                <a href="#p1"> <img src={Malek} alt="imageOfTeam"/></a>
                <a href="#p2"> <img src={Mohammad} alt="imageOfTeam"/></a>
                <a href="#p3"> <img src={Islam} alt="imageOfTeam"/></a>
                <a href="#p4"> <img src={Ismail} alt="imageOfTeam"/></a>
            </div>

            <div className="section" id="p1">
                <span className="name">Malek Hamad</span>
                <span className="border"></span>
                <p>
                <p> &#60; Designer, Booking system, contact form, user page, deploying, Back-end, handle errors, footer, webPack /&#62;</p>  
                </p>
            </div>

            <div className="section" id="p2">
                <span className="name">Mohammad Horani</span>
                <span className="border"></span>
                <p>
                &#60; Back-end, connection to database, booking table, users table, API, fixed server, deploying /&#62;
                </p>
            </div>

            <div className="section" id="p3">
                <span className="name">Islam</span>
                <span className="border"></span>
                <p>
                &#60; LogIn validation ,Register Form and validation, data validation, Home page,  /&#62;
                </p>
            </div>

            <div className="section" id="p4">
                <span className="name">Ismail</span>
                <span className="border"></span>
                <p>
                &#60; Home Page, About us part, adding features, back-end, events/&#62;
                </p>
            </div>

        </div>
    )
}