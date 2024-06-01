import React from 'react'
import './Header.css'
import linkedin from '../imagens/linkedin.svg'
import github from '../imagens/github.svg'
import whats from '../imagens/whats.svg'
import { NavLink } from 'react-bootstrap'


export default function Header() {
  return (
    <header className='header'>
      <div className='links'>
        <NavLink className='link' href='#apresentacao'>Apresentação</NavLink>
        <NavLink className='link' href='#tecnologias'>Tecnologias</NavLink>
        <NavLink className='link' href='#projetos'>Projetos</NavLink>
        <NavLink className='link' href='#linhaDoTempo'>Linha do tempo</NavLink>
      </div>
        <div className='redes'>
            <a href=""><img className='linkedin' src={linkedin} alt="" /></a>
            <a href=""><img className='github' src={github} alt="" /></a>
            <a href="https://wa.me/5521984510746?text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+serv" target='blank'><img className='whats' src={whats} alt="" /></a>
        </div>
    </header>
  )
}
