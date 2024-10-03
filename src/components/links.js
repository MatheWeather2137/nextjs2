import Link from "next/link";

export default function Links(){
    return(
        <div className="flex justify-center gap-10">
        <Link className="text-pink-300" href="/">Main</Link>
        <Link className="text-green-300" href="/strona1">Strona 1</Link>
        <Link className="text-yellow-300" href="/strona2">Strona 2</Link>
        <Link className="text-red-300" href="/strona3">Strona3</Link>
        <Link className="text-blue-400" href="/strona4">Strona4</Link>
        <Link className="text-gray-500" href="/strona5">Strona5</Link>
        </div>
    )
}