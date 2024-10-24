import React from "react";
import { Incrementar, Decrementar } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/Counter.module.css";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const Dispatch = useDispatch();

    return (
        <div className={styles.counter}>
            <h1>{count}</h1>
            <button className={styles.button} onClick={() => Dispatch(Incrementar())}>Incrementar</button>
            <button className={styles.button} onClick={() => Dispatch(Decrementar())}>Decrementar</button>
        </div>
    );
}

export default Counter;