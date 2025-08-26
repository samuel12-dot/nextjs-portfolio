export default function InactiveButton({text}){
    return (
        <button type="button" className="bg-[#272728] h-[50px] w-[150px] rounded-md border-1 border-[#777777] transition-border duration-300 cursor-pointer text-white">{text}</button>
    )
}