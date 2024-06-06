import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Garrett!</h1>
                <p className={styles.description}>I'm a senior Computer Science student with experience using React, NodeJS, Rust, and Python. Reach out if you'd like to know more!</p>
                <div className={styles.btnContainer}>
                    <a className={styles.contactBtn} href="mailto:garrettc01@protonmail.com">Contact Me</a>
                    <a className={styles.resumeBtn} href="https://spuonline-my.sharepoint.com/:b:/g/personal/critesg_spu_edu/ET90AyGPo_hNtWEfBvNgazgBvkYxUEfcGhN5sNMsJidryg?e=AwnwLx">My Resume</a>
                </div>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/self_2.jpeg")} alt="Hero image of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
