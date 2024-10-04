import Namelist from "@/components/namelist";
import Link from "next/link";



export default function Home() {

  const lista = [{imie: "Mateusz Pogoda",ok:true},{imie: "Dawid Trynkiewicz",ok: false},{imie: "Wiktor Śluzek",ok: false}]

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
    <Namelist imie="Bartosz Piętka" kolor="text-red-500" ok/>
    <Namelist imie="Oskar Podrucki" kolor="text-red-500"/>
    <Namelist imie="Bartłomiej Stępień" kolor="text-green-600"/>
    <Namelist imie="Franciszek Gałązka" kolor="text-green-600" ok/>

    {
      lista.map((osoba,idx)=>(
        <Namelist key={idx} imie={osoba.imie} ok={osoba.ok} kolor="text-black"/>
      )) 
    }
    </div>
  );
}
