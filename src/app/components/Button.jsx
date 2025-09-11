import { MdArrowOutward } from "react-icons/md";



export default function Button({text}) {
    return (
        <button type="button" className="flex items-center justify-center gap-4 bg-[#E7C285] h-[50px] w-[200px] rounded-md border-1 border-[hsla(37,100%,89%,90)] transition-border duration-300 cursor-pointer">
            <span>{text}</span>
            <span><MdArrowOutward /></span>
        </button>
    )
}