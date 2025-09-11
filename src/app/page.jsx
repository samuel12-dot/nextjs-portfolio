import About from "./components/About"
import Hero from "./components/Hero"
import Services from "./components/Services"
import AllWorks from "./components/AllWorks"
import Text from "./components/Text"
import TextNext from "./components/TextNext"
import Skills from "./components/Skills"
import Awards from "./components/Awards"



export default function Home(){
  return (
    <div className="min-h-screen">
      <Hero name="Samuel Ayodeji"/>
      <About />
      <Text text="about" containerStyles="mb-20 sm:mb-40" textStyles="mb-10 sm:text-9xl"/>
      <Services />
      <TextNext text="services" containerStyles="mb-20 sm:mb-40" textStyles="mb-10 sm:text-9xl"/>
      <AllWorks />
      <Skills styles="px-8 md:px-16 2xl:px-48"/>
      <Awards styles="px-8 md:px-16 2xl:px-48"/>
      <Text text="UI/UX Design, Frontend Engineering, Backend Development, API." textStyles="mb-10 sm:text-8xl"/>
      <TextNext text="Integration, Database Management, and Project Planning" textStyles="mb-10 sm:text-8xl"/>
    </div>
  )
}