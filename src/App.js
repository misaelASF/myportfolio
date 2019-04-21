import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout fixedHeader>
          <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span>
          <strong><Link to="/" style={{textDecoration: 'none', 
          color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Meu Portfólio</Link></strong></span>}>
              <Navigation className="menu">
                  <Link to="/">Home</Link>
                  <Link to="/sobre">Sobre Min</Link>
                  <Link to="/portfolio">Projetos</Link>
                  <Link to="/contato">Contato</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link to="/" style={{textDecoration: 'none',
           fontWeight: 'bold', textTransform: 'uppercase' }}>Meu Portfólio</Link>}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/sobre">Sobre Min</Link>
                  <Link to="/portfolio">Projetos</Link>
                  <Link to="/contato">Contato</Link>
              </Navigation>
          </Drawer>
          <Content>
             <div className="page-content" />
             <Main />
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
