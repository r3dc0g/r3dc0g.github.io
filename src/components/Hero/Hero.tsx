import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Garrett!</h1>
                <p className={styles.description}>I'm a senior Computer Science student with experience using React, NodeJS, Rust, and Python. Reach out if you'd like to know more!</p>
                <a className={styles.contactBtn} href="mailto:critesg@spu.edu">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/self.jpg")} alt="Hero image of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
