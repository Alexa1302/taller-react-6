import React from "react";
import Boton from "./Boton";
import { fireEvent, render, screen } from "@testing-library/react";

test('Debería mostrar el texto inicial y cambiar al hacer clic', () => {
    const handleClick = jest.fn();
    render(<Boton onClick={handleClick}/>);
    const buttonElement = screen.getByText("Hacer clic aquí");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});