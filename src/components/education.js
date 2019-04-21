import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends React.Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                   <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <p><strong style={{color: '#0f0', 
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #0f0'}}>{this.props.subtitle}</strong></p>
                </Cell>
            </Grid>
        );
    }
}

export default Education;