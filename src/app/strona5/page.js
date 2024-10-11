"use client"  // Instrukcja dla Next.js, aby komponent był renderowany po stronie klienta

import { useState } from "react"  // Importuje hook `useState` z React, który umożliwia zarządzanie stanem w komponencie

export default function Strona5() {  // Eksportuje domyślnie komponent `Strona5`
    const [items, setItems] = useState([""])  // Definiuje stan `items` - tablicę, która przechowuje elementy listy, z początkową wartością pustego elementu
    const [input, setInput] = useState("")  // Definiuje stan `input`, przechowujący wartość wpisywaną przez użytkownika, początkowo pustą

    // Funkcja `dodaj`, która dodaje nową wartość z inputa do tablicy `items` i resetuje pole tekstowe
    const dodaj = () => {
        setItems([...items, input])  // Aktualizuje tablicę `items` dodając nową wartość, tworząc nową tablicę z poprzednimi elementami i nowym `input`
        setInput("")  // Resetuje wartość pola tekstowego po dodaniu
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full">
            {/* Pole tekstowe do wprowadzania nowych elementów listy */}
            <input className="text-black" type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>

            {/* Przycisk do dodawania elementu z pola tekstowego do listy */}
            <button onClick={dodaj}>Dodaj</button>

            {/* Wyświetlenie listy dodanych elementów */}
            <ul>
                {
                    items.map((item, idx) =>
                        <li key={idx}>{item}</li>  // Dla każdego elementu w `items`, tworzy element listy `<li>`, przypisując unikalny klucz `key` jako indeks
                    )
                }
            </ul>
        </div>
    )
}
