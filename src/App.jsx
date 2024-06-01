import './App.css'
import Header from './components/Header'
import Apresentacao from './components/Apresentacao'
import Projetos from './components/Projetos'
import Tecnologias from './components/Tecnologias'
import LinhaDoTempo from './components/LinhaDoTempo'
import Footer from './components/Footer'
import { BrowserRouter, Router, Routes } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header/> 
      <Apresentacao/>
      <Projetos/>
      <Tecnologias/>
      <LinhaDoTempo/>
      <Footer/>   
    </>
  )
}

export default App
