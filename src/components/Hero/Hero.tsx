import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Garrett!</h1>
                <p className={styles.description}>I'm a senior Computer Science student with 1 year experience using React and NodeJS. Reach out if you'd like to know more!</p>
                <a className={styles.contactBtn} href="mailto:critesg@spu.edu">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
