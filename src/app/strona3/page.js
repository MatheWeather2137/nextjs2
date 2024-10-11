"use client"  // Instrukcja dla Next.js, aby oznaczyć, że ten komponent ma być renderowany po stronie klienta

import { useState } from "react"  // Importuje hook `useState` z React, aby zarządzać stanem w komponencie

export default function Strona3() {  // Eksportuje domyślnie funkcję komponentu `Strona3`
    const [color, setColor] = useState("bg-black text-white")  // Definiuje zmienną stanu `color`, która przechowuje nazwę klasy Tailwind CSS
    // Funkcja `changeColor`, która zmienia kolor tła, przełączając klasę pomiędzy `bg-black` a `bg-white`
    const changeColor = () => {
        setColor(color == "bg-black text-white" ? "bg-white text-black" : "bg-black text-white")  // Sprawdza, czy aktualny kolor to "bg-black" i zmienia na "bg-white" lub odwrotnie
    }

    return (
        // Główna zawartość strony - div z pełnym rozmiarem ekranu, wycentrowaną zawartością i zmieniającym się tłem
        <div className={`flex justify-center items-center h-screen w-full ${color}`}>
            {/* Przycisk, który po kliknięciu wywołuje funkcję `changeColor`, zmieniającą kolor tła */}
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
