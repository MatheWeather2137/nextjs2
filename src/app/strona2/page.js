"use client"  // Instrukcja dla Next.js, aby zaznaczyć, że ten komponent ma być renderowany po stronie klienta

import { useState } from "react"  // Importuje hook `useState` z React, który umożliwia zarządzanie stanem w komponencie funkcyjnym

export default function Strona2() {  // Eksport domyślny funkcji komponentu `Strona2`
    const [napis, setNapis] = useState("start")  // Definicja zmiennej stanu `napis` z wartością początkową "start" i funkcją `setNapis` do jej aktualizacji

    // Funkcja zmieniająca wartość zmiennej `napis` pomiędzy "start" a "stop"
    const zmien = () => {
        if (napis == "start") {  // Jeśli aktualny stan to "start", ustaw na "stop"
            setNapis("stop")
        } else {
            setNapis("start")  // W przeciwnym razie ustaw z powrotem na "start"
        }
    }

    return (
        <>
        {/* Wyświetla aktualny stan zmiennej `napis` */}
        <h1>{napis}</h1>

        {/* Przycisk, który po kliknięciu wywołuje funkcję `zmien` zmieniającą stan napisu */}
        <button onClick={zmien}>Zmień</button>
        </>
    )
}