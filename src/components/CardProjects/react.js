import React, { Fragment } from 'react'
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import Foto1 from '../../imgs/imagem2.jpg';
import Foto2 from '../../imgs/imagem3.jpg';
import Foto3 from '../../imgs/imagem4.jpg';

const ReactProjects = () => (
   <Fragment>
           <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius: '8px'}}>
    <CardTitle style={{color: '#000', height: '176px', 
      background: `url(${Foto1}) center / cover`}}>
      Reactjs Projeto Blog.
    </CardTitle>
      <CardText>
          Projeto simples de um blog com <strong style={{color: '#236787'}}>Reactjs</strong>, 
          <strong style={{color: '#903490'}}>Materialize-CSS</strong> no frontend e 
          <strong style={{color: '#909034'}}> Firebase</strong> no backend.
          Onde o usuário pode se cadastrar e logar, e também criar poster.
      </CardText>
      <CardActions>
         <Button colored>
         <a style={{textDecoration: 'none', color: '#236789'}} href="https://github.com/misaelASF/react-redux"
              target="_blank"
              rel="noopener noreferrer">GitHub</a>
         </Button>
         <Button colored>
           <a style={{textDecoration: 'none', color: '#236789'}} href="https://projeto-ninja-89da8.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer">Link</a>
         </Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
      <strong style={{color: '#f00', 
      textTransform: 'uppercase', 
      textAlign: "center",
      fontSize: '.8em'}}>Projeto fictício</strong>
   </Card>

   <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '20px', borderRadius: '8px'}}>
    <CardTitle style={{color: '#000', height: '176px', 
      background: `url(${Foto2}) center / cover`}}>
      Reactjs Projeto GitHub.
    </CardTitle>
      <CardText>
          Projeto com <strong style={{color: '#236787'}}> Reactjs</strong>, no frontend e api do
          <strong style={{color: '#333'}}> GitHub</strong> no backend.
          Onde o usuário digitar um login do github e a aplicação mostra o perfil e os repositórios do mesmo.
      </CardText>
      <CardActions>
         <Button colored>
         <a style={{textDecoration: 'none', color: '#236789'}} href="https://github.com/misaelASF/react-github"
              target="_blank"
              rel="noopener noreferrer">GitHub</a>
         </Button>
         <Button colored>
           <a style={{textDecoration: 'none', color: '#236789'}} href="http://reactjs-github.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer">Link</a>
         </Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
      <strong style={{color: '#f00', 
      textTransform: 'uppercase', 
      textAlign: "center",
      fontSize: '.8em'}}>Projeto fictício</strong>
   </Card>

   <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '20px', borderRadius: '8px'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
      background: `url(${Foto3}) center / cover`}}>
      Reactjs Projeto Portfólio.
    </CardTitle>
      <CardText>
          Projeto com <strong style={{color: '#236787'}}> Reactjs</strong>, no frontend.
      </CardText>
      <CardActions>
         <Button colored>
         <a style={{textDecoration: 'none', color: '#236789'}} href="https://github.com/misaelASF/react-github"
              target="_blank"
              rel="noopener noreferrer">GitHub</a>
         </Button>
         <Button colored>
           <a style={{textDecoration: 'none', color: '#236789'}} href="http://reactjs-github.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer">Link</a>
         </Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
      <strong style={{color: '#f00', 
      textTransform: 'uppercase', 
      textAlign: "center",
      fontSize: '.8em'}}>Projeto fictício</strong>
   </Card>
   </Fragment>
);

export default ReactProjects;