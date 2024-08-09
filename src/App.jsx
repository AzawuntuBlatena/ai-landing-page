
import './App.css'
import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Roadmap from './components/Roadmap'
function App() {
  

  return (
    <>
    
    <div className='pt-[4.75] lg:pt-[5.25] overflow-hidden'>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services  />
      <Pricing />
      <Roadmap />
    </div>

    <ButtonGradient />
    </>
  )
}

export default App
