import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div>
         <div style={{width: '100%', margin: 'auto' }}>
             <Grid className="landing-page">
                <Cell col={12}>
                  <img 
                  src="https://i.pinimg.com/originals/af/25/49/af25490494d3338afef00869c59fdd37.png"
                  className="avatar" 
                  alt="avatar" />
                  <div className="banner-text">
                     <h1>Full Stack Web Delevoper</h1>
                     <hr />
                     <p>HTML/CSS3 | Bootstrap | Javascript | Reactjs | NodeJs | MongoDB | Mysql | Vuejs</p>

                     <div className="social-links">
                         {/* Linkedin */}
                         <a href="https://www.linkedin.com/in/misael-augusto-ti/" 
                         target="_blank" rel="noopener noreferrer">
                             <i className="fa fa-linkedin-square" aria-hidden="true" />
                         </a>
                         {/* Github */}
                         <a href="https://github.com/misaelASF" target="_blank" rel="noopener noreferrer">
                             <i className="fa fa-github-square" aria-hidden="true" />
                         </a>
                         {/* freecodecamp */}
                         {/* <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                             <i className="fa fa-free-code-camp" aria-hidden="true" />
                         </a> */}
                     </div>
                  </div>
                </Cell>
             </Grid>
         </div>
      </div>
    )
  }
}

export default LandingPage;