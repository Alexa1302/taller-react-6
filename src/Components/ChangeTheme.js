import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ChangeTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const Styles = {
        container: {
            background: theme === 'Claro' ? '#FFFFFF' : '#000000',
            color: theme === 'Claro' ? '#000000' : '#FFFFFF',
            padding: '20px',
            textAlign: 'center',
            transition: 'background 0.5s ease, color 0.5s ease', // Transición suave
            borderRadius: '8px',
            boxShadow: theme === 'Claro' ? '0 4px 10px rgba(0,0,0,0.1)' : '0 4px 10px rgba(255,255,255,0.2)', // Sombra
        },

        button: {
            background: theme === 'Claro' ? '#000000' : '#FFFFFF',
            color: theme === 'Claro' ? '#FFFFFF' : '#000000',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background 0.3s ease, color 0.3s ease, transform 0.2s ease', // Transiciones suaves
            outline: 'none',
        },

    };
    
    // Efecto de hover para el botón
    const handleMouseOver = (e) => {
        e.target.style.transform = 'scale(1.20)'; // Escala el botón al pasar el ratón
    };

    const handleMouseOut = (e) => {
        e.target.style.transform = 'scale(1)'; // Regresa a su tamaño original
    };

    return (
        <div style={Styles.container}>
            <p>El tema actual es: {theme}</p>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={Styles.button} onClick={toggleTheme}>Cambiar el Tema</button>
        </div>
    );
}

export default ChangeTheme;