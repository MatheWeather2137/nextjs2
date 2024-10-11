"use client"  // Instrukcja dla Next.js, aby komponent był renderowany po stronie klienta

import Country from "@/components/country"  // Importuje komponent `Country` z folderu `components`
import { useState, useEffect } from "react"  // Importuje hooki `useState` i `useEffect` z React

export default function Strona6() {  // Eksportuje domyślnie komponent `Strona6`

    // Definiuje zmienne stanu:
    const [data, setData] = useState(null)  // `data` przechowuje dane o krajach, początkowo ustawione na `null`
    const [error, setError] = useState(false)  // `error` służy do obsługi błędów podczas pobierania danych, początkowo ustawione na `false`
    const [loading, setLoading] = useState(true)  // `loading` kontroluje stan ładowania danych, początkowo ustawione na `true`

    // Używa hooka `useEffect` do wykonania operacji po załadowaniu komponentu
    useEffect(() => {
        const getData = async () => {  // Asynchroniczna funkcja do pobierania danych o krajach
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")  // Wysyła zapytanie do API o wszystkie kraje
                const dataJson = await response.json()  // Przetwarza odpowiedź na format JSON
                setData(dataJson)  // Ustawia pobrane dane w stanie `data`
                console.log(dataJson)  // Loguje pobrane dane do konsoli
            } catch (error) {
                console.error("nie udało sie pobrać danych")  // Jeśli wystąpi błąd, loguje komunikat do konsoli
                setError(true)  // Ustawia stan `error` na `true`, aby wyświetlić komunikat błędu w UI
            } finally {
                setLoading(false)  // Po zakończeniu operacji, niezależnie od sukcesu czy porażki, ustawia `loading` na `false`
            }
        }
        getData()  // Wywołuje funkcję pobierania danych
    }, [])  // Pusta tablica zależności `[]` oznacza, że efekt uruchomi się tylko raz, po zamontowaniu komponentu

    return (
        <div className="flex flex-wrap gap-2 w-full h-screen justify-center">
            {/* Komunikat w przypadku błędu */}
            <p>{error && "Nie udało się pobrać danych"}</p>

            {/* Komunikat w trakcie ładowania danych */}
            <p>{loading && "Loading..."}</p>

            {/* Jeśli dane są dostępne, wyświetla każdy kraj za pomocą komponentu `Country` */}
            {
                data && data.map((kraj, idx) =>
                    <Country key={idx} kraj={kraj} />  // Dla każdego kraju w tablicy `data` renderuje komponent `Country`, przekazując dane o kraju jako prop `kraj`
                )
            }
        </div>
    )
}
