
import Button from "../Button";
import styles from "./styles.module.css";


export default function Card(title, posterImg, SubTitle ) {
    return (
        <div className={styles.container}>
            <img className="poster" src={posterImg} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{SubTitle}</p>
                <Button text="Comprar agora"/>
            </div>
        </div>
    );
} 




