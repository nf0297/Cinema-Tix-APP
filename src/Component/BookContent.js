import React, {Component} from 'react';
import {Header, Embed, Grid, Button, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import Cinemapage from '../Page/Cinemapage';

class BookContent extends Component {
    render(){
        const {image, title, rating, genre, meaning, link} = this.props;
        return(
            <div>
                <Grid divided columns={2}>
                    <Grid.Column width={4}>
                    <Header as='h2' style={style.header}>Book Ticket</Header>
                        <Image src={this.props.image} style={style.image}/>
                        <Button
                            as={Link}
                            to={link}
                            basic
                            inverted
                            fluid
                            compact
                            color='red'
                            icon='ticket'
                            content='Buy Ticket'
                            style={style.button}
                            />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid.Row style={style.detail}>
                            <Header as='h2' style={style.title}>{title}</Header>

                            <Grid.Column>
                                <p style={style.text}>Genre: {genre}</p>
                                <p style={style.text}>Rating: {rating} {meaning}</p>
                                <p style={style.text}>Synopsis: {this.props.description}</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Header as='h3' style={style.trailer}>Watch Trailer</Header>
                            <Embed
                            id={this.props.trailer}
                            placeholder='https://i1.sndcdn.com/avatars-000451237584-zu38au-t500x500.jpg'
                            source='youtube'
                            />
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default BookContent;

const style ={
    image: {
        width:'40vw',
        height:'50vh'
    },
    header: {
        backgroundColor:'#222324',
        width:'140px',
        height:'30px',
        color:'#fff'
    },
    title: {
        color:"#fff"
    },
    detail: {
        backgroundColor:'#222324',
        paddingBottom:'4vh',
        marginBottom:'4vh',
        color:'#fff'
    },
    text: {
        margin:'0vh 0vw',
        fontWeight:'bold',
        color:'#fff'
    },
    trailer: {
        color:'#fff'
    },
    button: {
        margin:'3vh 0vw'
    }
}