import React from 'react'
import './Botao.css'

export default function Botao(props) {
  return (
    <a href={props.link} target='blank'><button className='botao'>{props.texto}</button></a> 
  )
}
