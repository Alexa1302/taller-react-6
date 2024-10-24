import React, { useState } from "react";
import styles from "../Styles/Boton.module.css";

const Boton = ({onClick}) => {
    const [texto, setTexto] = useState('Hacer clic aquí');

    const CambiarTexto = () => {
        setTexto('¡Gracias por hacer clic!');
        if (onClick) onClick();
    };

    return (
        <button className={styles.button} onClick={CambiarTexto}>
            {texto}
        </button>
    );
}

export default Boton;