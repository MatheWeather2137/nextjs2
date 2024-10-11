export default function Namelist({ imie, kolor, ok }) {  // Definiuje komponent `Namelist`, który przyjmuje trzy propsy: `imie`, `kolor`, `ok`

    // Tworzy zmienną `classnames`, która zależy od wartości `ok`
    var classnames = "";  // Zmienna do przechowywania klas CSS
    if (ok) {  // Jeśli `ok` jest true, użyj zielonego tła
        classnames = "border w-[200px] bg-green-200";
    } else {  // Jeśli `ok` jest false, użyj czerwonego tła
        classnames = "border w-[200px] bg-red-200";
    }

    return (
        // Zwraca div z dynamicznie przypisanymi klasami (`classnames`)
        <div className={classnames}>
            {/* Wyświetla imię z przypisanym kolorem tekstu, przekazanym w propie `kolor` */}
            <h1 className={kolor}>{imie}</h1>
        </div>
    );
}
