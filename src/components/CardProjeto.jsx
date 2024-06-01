import React from 'react'
import './CardProjeto.css'
import Botao from './Botao'

export default function CardProjeto(props) {

  return (
    <div className="cardprojeto">
        <img src={props.capa} alt={props.titulo} /> 
        <div>
          <h3>{props.titulo}</h3>
          <p>{props.descricao}</p>
          <p><b>Tecnologias:</b> {props.tecnologias}</p>
        </div>
        <Botao texto="Veja o projeto" link={props.link}/>
    </div>
  )
}
