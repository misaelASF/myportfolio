import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ReactProjects from './CardProjects/react';
import VueProjects from './CardProjects/vue';
import NodeProjects from './CardProjects/node';
import BootProjects from './CardProjects/bootstrap';

class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return (
        <div className="projects-container">
             <ReactProjects />
        </div>
      ) 
    } else if(this.state.activeTab === 1){
      return (
        <div className="projects-container">
            <VueProjects />
        </div>
      )
    } else if(this.state.activeTab === 2){
      return (
        <div className="projects-container">
        <BootProjects />
     </div>
      )
    } else if(this.state.activeTab === 3){
      return (
        <div className="projects-container">
           <NodeProjects />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>Reactjs</Tab>
              <Tab>Vuejs</Tab>
              <Tab>Bootstrap</Tab>
              <Tab>Nodejs</Tab>
          </Tabs>
          <section className="projects-grid">
              <Grid className="projects-grid">
                  <Cell col={12}>
                     <div className="content">{this.toggleCategories()}</div>
                  </Cell>
              </Grid>
              
          </section>
      </div>
    )
  }
}

export default Projects;