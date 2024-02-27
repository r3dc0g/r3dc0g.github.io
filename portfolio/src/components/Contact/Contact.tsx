import React from "react";
import {getImageUrl} from "../../utils";

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                    <a href="mailto:critesg@spu.edu">critesg@spu.edu</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"/>
                    <a href="https://www.linkedin.com/in/garrett-crites/">linkedin.com/in/garrett-crites/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                    <a href="https://github.com/r3dc0g">github.com/r3dc0g</a>
                </li>
            </ul>
        </footer>
    );
};
