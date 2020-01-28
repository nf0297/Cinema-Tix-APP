import React, {Component} from 'react';
import {Container, Button, Grid} from 'semantic-ui-react'

class CinemaBottom extends Component {
    render (){
        const {cinema, time} = this.props;
        console.log(time);
        return(
                <Grid style={style.container}>
                        <Grid.Row>
                            <Grid.Column>
                                <p style={style.name}>{cinema}</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                            <p>{time}</p>
                            
                            </Grid.Column>
                        </Grid.Row>
                </Grid>
        );
    }
}

export default CinemaBottom;

const style= {
    container: {
    backgroundColor:'#fff',
    width:'70%',
    marginLeft:'16%',
    marginRight:'16%',
    padding:'5vh 3vw'
    },
    name: {
        color:'#222324',
        fontSize:'16px',
        fontWeight:'bold',
        margin:'0vh 0vw'
    },
    price: {
        paddingRight:'15vw'
    },
    date: {
        width:'200px'
    }

}