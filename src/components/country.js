import Image from "next/image";  // Importuje komponent `Image` z Next.js do optymalizowanego wyświetlania obrazów

export default function Country({ kraj }) {  // Definiuje komponent `Country`, który przyjmuje obiekt `kraj` jako prop

    return (
        // Główna sekcja komponentu z obramowaniem i paddingiem, używając klas Tailwind CSS
        <div className="border border-green-600 p-4">

            {/* Wyświetla flagę kraju za pomocą komponentu `Image` z Next.js */}
            <Image
                src={kraj.flags.png}  // Źródło obrazu flagi (adres URL obrazka z API)
                width={200}  // Szerokość obrazka (nie musisz się martwić o responsywność, ponieważ Next.js optymalizuje to za Ciebie)
                height={100}  // Wysokość obrazka
                alt={kraj.name.common}  // Alternatywny tekst (w przypadku braku obrazu), tutaj nazwa kraju
                style={{
                    width: '300px',  // Nadpisuje szerokość na 300px
                    height: '200px'  // Nadpisuje wysokość na 200px
                }}
            />

            {/* Wyświetla nazwę kraju */}
            <h1>{kraj.name.common}</h1>
        </div>
    );
}
