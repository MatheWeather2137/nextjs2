import Namelist from "@/components/namelist";  // Importuje komponent `Namelist` z folderu `components`
import Link from "next/link";  // Importuje `Link` z Next.js, do nawigacji między stronami

export default function Home() {  // Eksportuje domyślnie funkcję komponentu `Home`

  // Lista obiektów, z których każdy zawiera imię i flagę `ok`, która może być true lub false
  const lista = [
    { imie: "Mateusz Pogoda", ok: true },
    { imie: "Dawid Trynkiewicz", ok: false },
    { imie: "Wiktor Śluzek", ok: false }
  ];

  return (
    // Główna sekcja z klasami Tailwind: ustawienie układu jako kolumna, wyśrodkowanie zawartości i odstępy między elementami
    <div className="flex flex-col justify-center items-center h-screen gap-5">

      {/* Kilka przykładów wykorzystania komponentu `Namelist` z różnymi imionami i kolorami tekstu */}
      <Namelist imie="Bartosz Piętka" kolor="text-red-500" ok />  {/* Kolor czerwony i flaga `ok` ustawiona na true */}
      <Namelist imie="Oskar Podrucki" kolor="text-red-500" />  {/* Kolor czerwony, brak flagi `ok` */}
      <Namelist imie="Bartłomiej Stępień" kolor="text-green-600" />  {/* Kolor zielony, brak flagi `ok` */}
      <Namelist imie="Franciszek Gałązka" kolor="text-green-600" ok />  {/* Kolor zielony i flaga `ok` ustawiona na true */}

      {/* Iteracja po liście obiektów i dynamiczne tworzenie komponentów `Namelist` */}
      {
        lista.map((osoba, idx) => (
          <Namelist
            key={idx}  // Używamy `idx` jako unikalnego klucza dla każdego elementu w liście
            imie={osoba.imie}  // Przekazanie imienia osoby
            ok={osoba.ok}  // Przekazanie flagi `ok`
            kolor="text-black"  // Wszystkie te elementy mają kolor czarny
          />
        ))
      }

    </div>
  );
}
