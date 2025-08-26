import { MdArrowOutward } from "react-icons/md";


export default function InactiveButton({ text }) {
    return (
        <button type="button" className="flex items-center justify-center gap-4 bg-[#272728] h-[50px] w-[150px] rounded-md border-1 border-[#777777] transition-border duration-300 cursor-pointer text-white">
            <span>{text}</span>
            <span><MdArrowOutward /></span>
        </button>
    )
}