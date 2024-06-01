import React from 'react'
import './Tecnologias.css'
import html from '../imagens/tecnologia_html.svg'
import css from '../imagens/tecnologia_css.svg'
import js from '../imagens/tecnologia_js.svg'
import react from '../imagens/tecnologia_react.svg'
import github from '../imagens/tecnologia_github.svg'



export default function Tecnologias() {

  return (
    <section className="tecnologias" id='tecnologias'>
        <h1>Tecnologias</h1>
        <div className="container">
            <div>
                <img className='html' src={html} alt="HTML" />
                <p>HTML</p>
            </div>
            <div>
                <img className='css' src={css} alt="CSS" />
                <p>CSS</p>
            </div>
            <div>
                 <img className='js' src={js} alt="Javascript" />
                 <p>JavaScript</p>
            </div>
            <div>
                 <img className='react' src={react} alt="React" />
                 <p>React</p>
            </div>
            <div>
                 <img className='github2' src={github} alt="Github" />  
                 <p>GitHub</p>
            </div>    
        </div>  
    </section>
  )
}
