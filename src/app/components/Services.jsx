import Image from "next/image"
import { servicesInfo } from "../portfolio"

export default function Services() {
    return (
        <section className="px-8 md:px-16 2xl:px-48 mb-40">


            <div className="flex flex-col xl:flex-row gap-40 w-full">
                <div>
                    <Image src={'/images/work-1.png'} width={500} height={500} alt={''} />
                    <p className="max-w-md p">My services blend creativity and strategy to bring your vision to life, leaving a lasting impact.</p>
                </div>
                <div>{servicesInfo.map((section, index) => {
                    return (
                        <div key={index}>

                            <div className="flex items-center gap-5">
                                <h3 className="text-3xl">{section.id}</h3>

                                <div>
                                    <h4 className="font-black text-3xl my-4">{section.title}</h4>
                                    <p className="font-bold p uppercase mb-8">{section.desc}</p>
                                </div>

                            </div>

                            <div className="h-0.5 bg-[#777777] md:w-[600px]"></div>
                        </div>
                    )
                })}</div>
            </div>



        </section>
    )
}