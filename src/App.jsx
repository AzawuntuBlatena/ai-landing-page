
import './App.css'
import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
// import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
function App() {
  

  return (
    <>
    
    <div className='pt-[4.75] lg:pt-[5.25] overflow-hidden'>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
    </div>

    <ButtonGradient />
    </>
  )
}

export default App
