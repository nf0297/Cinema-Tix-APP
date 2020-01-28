import React, {Component} from 'react';
import {Image, Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Upcoming extends Component {
    render(){
        const {image, title, link, rating} = this.props;
        return(
            <div>
                <Card as={Link} to={link} style={style.card}>
                    <Image src={image} style={style.image}/>
                    <Card.Content style={style.content}>
                        <Card.Header style={style.title}>{title}</Card.Header>
                        <Card.Description style={style.rating}>{rating}</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default Upcoming;

const style = {
    card: {
        margin:'3vh 1vw'
    },
    title: {
        fontSize:'18px',
        fontWeight:'bold',
        color:'#fff'
    },
    rating: {
        backgroundColor:'blue',
        color:'#fff',
        fontSize:'12px',
        width:'20%',
        marginLeft:'40%',
        marginRight:'40%'
    },
    image:{
        height:'55vh',
        width:'40vw'
    },
    content:{
        textAlign:'center',
        backgroundColor:'#222324'
    }

} 