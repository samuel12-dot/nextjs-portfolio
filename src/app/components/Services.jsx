import Image from "next/image"

const servicesInfo = [
    {
        id: "01",
        title: "Research & Planning",
        desc: "User research, audits and plan.",
    },
    {
        id: "02",
        title: "Branding",
        desc: "User research, audits and plan.",
    },
    {
        id: "03",
        title: "UI/UX Design",
        desc: "User research, audits and plan.",
    },
    {
        id: "04",
        title: "Coding",
        desc: "User research, audits and plan.",
    }
]

export default function Services() {
    return (
        <div className="ml-40 w-full">


            <div className="flex gap-40 w-full bg-yellow-50">
                <Image src={'/images/work-1.png'} width={500} height={500} alt={''} />
                <div>{servicesInfo.map((section, index) => {
                    return (
                        <div key={index}>
                            <h3>{section.id}</h3>
                            <h5>{section.title}</h5>
                            <p>{section.desc}</p>
                            <div className="h-0.5 bg-[#777777]"></div>
                        </div>
                    )
                })}</div>
            </div>



        </div>
    )
}