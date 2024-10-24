import React from "react";
import styles from "../Styles/Inicio.module.css";

function Inicio() {
    return (
        <div>
            <h1 className={styles.titulos}>Bienvenido a la página de inicio</h1>
            <h2 className={styles.titulos}>Bienvenido a EcoCompras</h2>
            <p className={styles.texto}>Descubre un universo de productos increíbles en EcoCompras. Desde gadgets intergalácticos hasta moda de última tendencia, cada artículo está diseñado para hacer tu vida más emocionante.</p>
            <p className={styles.texto}>¡Explora, compra y transforma tu día a día con lo mejor del cosmos!</p>
        </div>
    );
}

export default Inicio;