"use client"  // Instrukcja w Next.js, informująca, że ten komponent jest komponentem klienta (client-side) i powinien być renderowany po stronie klienta

import { useState } from "react"  // Importuje hook `useState` z biblioteki React, który pozwala na zarządzanie stanem w komponencie funkcyjnym

export default function Strona1(){  // Eksportuje domyślnie komponent `Strona1`, który jest główną funkcją zwracającą interfejs użytkownika
    const [licznik, setLicznik] = useState(0)  // Tworzy zmienną stanu `licznik` i funkcję `setLicznik` do jej aktualizacji, inicjalizując wartość początkową na 0

    // Funkcja `plus`, która zwiększa wartość licznika o 1, wywołując funkcję `setLicznik`
    const plus = () => {
        setLicznik(licznik + 1)
    }

    // Funkcja `minus`, która zmniejsza wartość licznika o 1, wywołując funkcję `setLicznik`
    const minus = () => {
        setLicznik(licznik - 1)
    }

    return (
        <>
        {/* Wyświetla aktualną wartość zmiennej `licznik` */}
        <h1>{licznik}</h1>

        {/* Przycisk, który po kliknięciu uruchamia funkcję `plus`, zwiększając wartość licznika */}
        <button onClick={plus}>Dodaj 1</button>
        <br/>

        {/* Przycisk, który po kliknięciu uruchamia funkcję `minus`, zmniejszając wartość licznika */}
        <button onClick={minus}>Odejmij 1</button>
        </>
    )
}