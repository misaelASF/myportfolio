import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Foto from '../imgs/logo.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
          <Grid className="contact-grid">
              <Cell col={6}>
                 <h2>Misael Augusto</h2>
                 <img src={Foto} 
                 alt="Foto"
                 style={{height: '250px', borderRadius: '10px', 
                 boxShadow: '0 4px 10px 0 #0009',
                 marginTop: '20px'}}
                 />
                 <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                 </p>
              </Cell>
              <Cell col={6} style={{ flexWrap: 'wrap'}}>
                 <h2>Meu Contato</h2>
                 <hr />
                 <div className="contact-list">
                     <List>

                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Tahoma', fontWeight: 'bold'}}>
                              <i className="fa fa-phone-square" aria-hidden="true" /> 
                              (81) 98523-5161
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Tahoma', fontWeight: 'bold'}}>
                              <i className="fa fa-whatsapp" aria-hidden="true" /> 
                              (81) 98523-5161
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Tahoma', fontWeight: 'bold'}}>
                              <i className="fa fa-envelope" aria-hidden="true" /> 
                               misael.dev.web@gmail.com
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Tahoma', fontWeight: 'bold'}}>
                              <i className="fa fa-telegram"></i> 
                              @Misael_ASF
                            </ListItemContent>
                        </ListItem>

                    </List>
                 </div>
              </Cell>
          </Grid>
      </div>
    )
  }
}

export default Contact;