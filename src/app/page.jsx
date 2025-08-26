import About from "./components/About"
import Header from "./components/Header"
import Services from "./components/Services"
import Works from "./components/Works"



export default function Home(){
  return (
    <div className="min-h-screen">
      <Header name="Samuel Ayodeji"/>
      <About />
      <Services />
      <Works />
    </div>
  )
}