import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Debería cambiar el texto al hacer clic en el botón", () => {
    render(<App/>);
    const buttonElement = screen.getByText("Hacer clic aquí");
    fireEvent.click(buttonElement);
    const nuevoTexto = screen.getByText("¡Gracias por hacer clic!");
    expect(nuevoTexto).toBeInTheDocument();
});