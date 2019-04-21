import React, { Fragment } from 'react'
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


const BootProjects = () => (
   <Fragment>
           <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '20px', borderRadius: '8px'}}>
    <CardTitle style={{color: '#000', height: '176px', 
      background: `url(https://conexaofreelancer.com.br/wp-content/uploads/2018/06/Negativo.png) center / cover`}}>
      Nodejs Projeto.
    </CardTitle>
      <CardText>
      Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever since 
      the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book.
      </CardText>
      <CardActions>
         <Button colored>
         <a style={{textDecoration: 'none', color: '#236789'}} href="#/"
              target="_blank"
              rel="noopener noreferrer">GitHub</a>
         </Button>
         <Button colored>
           <a style={{textDecoration: 'none', color: '#236789'}} href="#/"
              target="_blank"
              rel="noopener noreferrer">Link</a>
         </Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
      {/* <strong style={{color: '#f00', 
      textTransform: 'uppercase', 
      textAlign: "center",
      fontSize: '.8em'}}>Projeto fictício</strong> */}
   </Card>
   </Fragment>
);

export default BootProjects;