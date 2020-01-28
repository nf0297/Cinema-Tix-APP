import React, {Component} from 'react';
import {Container, Card, Grid} from 'semantic-ui-react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Nav from '../Component/Navmenu';
import Upcoming from '../Component/Upcoming';
import Now from '../Component/Now';
import {getAllMovie} from '../Redux/_actions/ActionMovie';
import { connect } from 'react-redux';

class Homepage extends Component {

constructor(props){
    super(props);
    
}

componentDidMount(){
    this.props.dispatch(getAllMovie());
}

    render(){
        const movie = this.props.AllMovies;
        console.log(movie);
        return(
        <div className='home-container' style={style.container}>
        <Header/>
        <Nav/>
        <Container fluid style={style.content}>
            <h2 style={style.header}>Now Playing</h2>
            <Card.Group itemsPerRow={4}>
            {movie.map(Items => 
                    <Now
                    image={Items.image}
                    title={Items.title}
                    rating={Items.AgeRating.initial}
                    link={`movie/`+Items.id+`/data`}
                    />
                )}
            </Card.Group>

            <h2 style={style.header}>Upcoming</h2>
            <Card.Group itemsPerRow={4}>
            {movie.map(Items => 
                    <Upcoming
                    image={Items.image}
                    title={Items.title}
                    rating={Items.AgeRating.initial}
                    link={`upcoming/`+Items.id+`/data`}
                    />
                )}
            </Card.Group>
        </Container>
        <Footer/>
        </div>
        );
    }
}

//state
const mapStatetoProps = state => ({
    AllMovies: state.ReducerMovie.movies,
})

export default connect(mapStatetoProps)(Homepage);

const style = {
    header: {
        backgroundColor:'#222324',
        width:'140px',
        height:'30px',
        color:'#fff',
        paddingTop:'2vh'
    },
    container: {
        backgroundColor:'#222324'
    },
    content: {
        padding:'0vh 3.5%'
    },
    group: {
        padding:'3vh 0vw'
    },
    grid: {
            padding: '5vh 10%',
            color:'#fff'
    }
}