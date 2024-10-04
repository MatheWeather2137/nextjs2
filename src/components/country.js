import Image from "next/image"
export default function Country({kraj}){
    return(
        <div className="border border-green-600 p-4">
            <Image
            src={kraj.flags.png}
            width={200}
            height={100}
            alt={kraj.name.common}
            style={{
                width: '300px',
                height: '200px'
            }}
            />
            <h1>{kraj.name.common}</h1>
        </div>
    )
}