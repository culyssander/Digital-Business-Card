import React from "react";
import profilePhoto from "../images/Quitumba.jpeg"
// import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return(
        <header>
            <img src={profilePhoto} alt="image" />
            <h1>Quitumba Ferreira</h1>
            <h3>Full-stack developer</h3>
            <a href="https://culyssander.github.io/" target="_blank">quitumba.website</a><br /><br />
            <a className="botao-email" href="mailto:culyssandercentro@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i> Email</a>
            <a className="botao-linkedln" href="https://www.linkedin.com/in/quitumba-ferreira-5a598618a/" target="_blank"><i class="fa-brands fa-linkedin"></i> Linkedln</a>
        </header>
    )
}