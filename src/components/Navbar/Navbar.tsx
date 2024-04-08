import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import {FC, useState} from "react";

export const Navbar: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title}href="/">Portfolio</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li className={styles.menuItem}><a href="#about">About</a></li>
                    <li className={styles.menuItem}><a href="#experience">Experience</a></li>
                    <li className={styles.menuItem}><a href="#projects">Projects</a></li>
                    <li className={styles.menuItem}><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
