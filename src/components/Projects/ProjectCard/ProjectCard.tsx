import styles from "./ProjectCard.module.css";
import {getImageUrl} from "../../../utils";
import Project from "../../../types/Project";

type ProjectCardProps = {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const { title, imageSrc, description, skills,  source } = project;

    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill: string, id) => {
                        return (
                            <li
                                key={id}
                                className={styles.skill}
                            >
                                {skill}
                            </li>
                        )
                    })
                }
            </ul>
            <div className={styles.links}>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    );
};
