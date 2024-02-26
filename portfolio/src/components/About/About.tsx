import React from "react";

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with my laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized backend systems and APIs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have created multiple landing pages and have designed systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
