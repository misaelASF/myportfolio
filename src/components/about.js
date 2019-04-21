import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import Education from './education';
import Foto from '../imgs/logo.jpg';
import Skills from './skills';

class About extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4} style={{ flex: '1' }}>
           <div style={{textAlign: 'center'}}>
             <img
             src={Foto}
             alt="foto"
             style={{height: '300px', width: '300px', borderRadius: '50%', 
             justifyContent: 'center', alignItems: 'center', paddingTop: '40px'}} />
           </div>
           <h2 style={{paddingTop: '2em'}}>Misael Augusto</h2>
           <h4 style={{color: '#0f0'}}>Programador</h4>
           <hr style={{borderTop: '3px solid #894589', width: '50%'}} />
           <p style={{fontWeight: 'bold'}}>Olá sou Misael, sou apaixonado por tecnologia, estudante de
              <strong style={{color: '#f00'}}> Sistema de Informação</strong> e 
              <strong style={{color: '#f00'}}> Desenvolvedor Web</strong>,
             possuo dominio em html, css, javascript, bootstrap, reactjs, nodejs.
           </p>
           <hr style={{borderTop: '3px solid #894589', width: '50%'}} />
           <h5>Endereço:</h5>
           <p><strong style={{textTransform: 'uppercase', color: '#08f',
            borderBottom: '1px solid #ddd', fontSize: '1.5em'}}>Paulista, PE.</strong></p>
           <h5>Meu Website:</h5>
           <p style={{color: "#f00", fontSize: "1.2rem"}}>https://misael-dev.herokuapp.com/</p>
        </Cell>
        <Cell className="about-right-col" col={8}>
           <h2>Ensino: </h2>
           <Education startYear={2016} 
                      endYear={2019}
                      schoolName="Faculdade Joaquim Nabuco"
                      subtitle="Cursando bacharelado em Sistema de Informação"
                      schoolDescription=" 
                      É uma fundação pública com regime de direito
                       privado vinculada ao Ministério da Educação 
                       do Brasil. Sediada no Recife em Pernambuco, foi fundada
                        em 1949 com o propósito de preservar o legado histórico-cultural
                         de Joaquim Nabuco, com ênfase nas regiões Norte e Nordeste do Brasil!
                      " />
                  <hr style={{borderTop: '3px solid #229477'}} />
                  <h2>Habilidades:</h2>
                  <Skills
                  skill="javascript"
                  progress={75} />
                  <Skills
                  skill="HTML/CSS"
                  progress={80} />
                  <Skills
                  skill="Nodejs"
                  progress={75} />
                  <Skills
                  skill="Reactjs"
                  progress={75} />
                  <Skills
                  skill="Vuejs"
                  progress={50} />
                  <Skills
                  skill="Bootstrap"
                  progress={75} />   
        </Cell>
      </Grid>
    )
  }
}

export default About;