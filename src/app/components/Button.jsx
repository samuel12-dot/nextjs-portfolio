
export default function Button({text}){
    return (
        <button type="button" className="bg-[#E7C285] h-[50px] w-[150px] rounded-md hover:border-3 hover:border-[hsla(37,100%,89%,90)] transition-border duration-300 cursor-pointer">{text}</button>
    )
}