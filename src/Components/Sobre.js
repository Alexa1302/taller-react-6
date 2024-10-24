import React from "react";
import styles from "../Styles/Sobre.module.css";

function Sobre() {
    return (
        <div>
            <h1 className={styles.titulos}>Acerca de nosotros</h1>
            <p className={styles.texto}>En EcoCompras, somos un equipo de aventureros intergalácticos dedicados a traer productos de calidad cósmica a la Tierra. Fundada en 2020 en un asteroide de Andrómeda, nuestra misión es hacer que cada compra sea una experiencia emocionante.
            Desde gadgets futuristas hasta moda innovadora, en EcoCompras encontrarás lo mejor del universo. ¡Únete a nosotros y descubre lo extraordinario!</p>
        </div>
    );
}

export default Sobre;