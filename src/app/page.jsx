import About from "./components/About"
import Header from "./components/Header"
import Services from "./components/Services"



export default function Home(){
  return (
    <div>
      <Header name="Samuel Ayodeji"/>
      <About />
      <Services />
    </div>
  )
}