import React from 'react'
import './Projetos.css'
import cards from '../db.json'
import CardProjeto from './CardProjeto'



export default function Projetos() {
  // const item = document.getElementById("projetos");
  // console.log(item)

  // const animeScroll = () => {
  //   const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  //   // console.log(windowTop)

  //   if(windowTop > item.offsetTop){
  //     item.classList.add('animate')
  //   } else {
  //     item.classList.remove('animate')
  //   }
  // }

  // animeScroll()

  // window.addEventListener('scroll', ()=> {
  //   animeScroll();
  // })

  return (
    <section className="projetos" id='projetos'>
        <div className="container">
            <h1>Projetos</h1>
            {cards.map((card) =>{
                return <CardProjeto key={card.titulo} capa={card.capa} titulo={card.titulo} descricao={card.descricao} link={card.link} tecnologias={card.tecnologias}/>
            })}
            
        </div>
    </section>

  )
}
