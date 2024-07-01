import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Hobbies</h3>
                            <p>I enjoy learning new things, playing fast paced video games, and reading! I'm currently learning about terminal UIs, playing Ultrakill in my free time, and reading existentialist philosophy.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Interests</h3>
                            <p>I'm interested in all things complex! Recently I've been digging deeper into the Rust programming language. I enjoy the challenge the borrow checker introduces. It forces the developer to be conscious about their memory useage.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Education</h3>
                            <p>I am recently completed my Bachelors in Computer Science at Seattle Pacific University</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
