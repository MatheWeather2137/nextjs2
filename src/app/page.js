import Namelist from "@/components/namelist";



export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
    <Namelist imie="Bartosz Piętka" kolor="text-red-500" ok/>
    <Namelist imie="Oskar Podrucki" kolor="text-red-500"/>
    <Namelist imie="Bartłomiej Stępień" kolor="text-green-600"/>
    <Namelist imie="Franciszek Gałązka" kolor="text-green-600" ok/>
    </div>
  );
}
