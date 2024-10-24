import React, { useEffect, useState } from "react";
import styles from "../Styles/Ejercicio2.module.css";

function Contador() {
    const [count, setCount] = useState(0);

    useEffect(() => {
            console.log("El contador ha incrementado en:", count);
            // El console.log se imprime dos veces antes de ejecutar debido al modo estricto de React(<React.StrictMode>).
    }, [count]);

    return (
        <div className={styles.counter}>
            <h1>{count}</h1>
            <button className={styles.button} onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Contador;