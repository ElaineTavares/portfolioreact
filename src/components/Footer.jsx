import React from 'react'
import './Footer.css'
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import linkedin from '../imagens/linkedin.svg'
import github from '../imagens/github.svg'
import whats from '../imagens/whats.svg'
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='footer'>
        <h2>Elaine Tavares <FaCopyright size={10} />  2024</h2>
        <div className='container'>
            <div className="telefone">
                <div >
                    <CiPhone size={20} /><a className='linkTelefone' href='https://wa.me/5521984510746?text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+serv' target='blank'>(21) 98451-0746</a>
                </div>
                <div>
                    <MdOutlineMail size={20} /><a className='linkEmail' href="mailto:elainetavares@dev.com.br" target='blank'>elainetavares.dev@gmail.com</a>
                </div>
            </div>
             <div className='redes'>
                <a href=""><img className='linkedin' src={linkedin} alt="" /></a>
                <a href=""><img className='github' src={github} alt="" /></a>
                <a href="https://wa.me/5521984510746?text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+serv" target='blank'><img className='whats' src={whats} alt="" /></a>
            </div>    
             
        </div>
    </footer>
  )
}
