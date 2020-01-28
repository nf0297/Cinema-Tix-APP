import React, {Component} from 'react';
import {Grid, Image, Button, Icon} from 'semantic-ui-react';

class CinemaTop extends Component {
    render(){
        const {image, title, duration} = this.props; 
        return(
            <div className='top-container' style={style.container}>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <Image src={image} style={style.image}/>
                    </Grid.Column>

                    <Grid.Column>
                        <p style={style.title}>{title}</p>
                        <p><Icon name='clock'/>{duration} minutes</p>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default CinemaTop;

const style={
    container: {
        backgroundColor:'#fff',
        width:'70%',
        margin:'10vh 16% 0vh 16%',
        padding:'5vh 3vw'
        },
    image:{
        width:'100%',
        height:'35vh'
    },
    title: {
        fontSize:'20px',
        fontWeight:'bold'
    }
}