"use client"  // Instrukcja dla Next.js, aby zaznaczyć, że komponent jest renderowany po stronie klienta

import { useState } from "react"  // Importuje hook `useState` z React, aby zarządzać stanem w komponencie

export default function Strona4() {  // Eksportuje domyślnie komponent `Strona4`
    const [bgcolor, setBgcolor] = useState("bg-black")  // Definiuje zmienną stanu `bgcolor`, przechowującą klasę koloru tła, początkowo ustawioną na "bg-black"
    const [input, setInput] = useState("")  // Definiuje zmienną stanu `input`, która przechowuje wartość z pola tekstowego, początkowo pustą

    // Funkcja `changeColor`, która zmienia wartość zmiennej `bgcolor` na podstawie wartości wprowadzonej przez użytkownika w polu tekstowym
    const changeColor = () => {
        setBgcolor(input)  // Zaktualizuj kolor tła na wartość podaną w polu tekstowym
    }

    return (
        // Div z pełnym rozmiarem ekranu, wycentrowaną zawartością i zmieniającym się kolorem tła
        <div className={`flex justify-center items-center h-screen w-full ${bgcolor}`}>
            {/* Pole tekstowe do wprowadzenia klasy koloru tła */}
            <input type="text" onChange={(e) => setInput(e.target.value)}></input>

            {/* Przycisk, który po kliknięciu zmienia kolor tła na wartość z pola tekstowego */}
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
