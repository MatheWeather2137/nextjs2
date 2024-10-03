export default function Namelist({imie,kolor,ok}){

    var classnames = ""
    if(ok){
        classnames = "border w-[200px] bg-green-200"
    } else classnames = "border w-[200px] bg-red-200"

    return(
        <div className={classnames}>
            <h1 className={kolor}>{imie}</h1>
        </div>
    )
}