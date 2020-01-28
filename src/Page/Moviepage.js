import React, {Component} from 'react';
import {Grid, Container, Button, Image} from 'semantic-ui-react';

import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Navmenu from '../Component/Navmenu';
import BookContent from '../Component/BookContent';

import {getMovieByID} from '../Redux/_actions/ActionMovie';
import {connect} from 'react-redux'; 

class Moviepage extends Component {

    componentDidMount(){
    const {id} = this.props.match.params;
    this.props.dispatch(getMovieByID(id));
    console.log(id);
    }

    render(){
        const movie = this.props.MovieData;
        console.log(movie, "Testbroo");
        return(
            <div className='movie-container' style={style.container}>
            <Header/>
            <Navmenu/>
            <Container className='movie-content' style={style.movie}>
                {movie.map(Items => {
                    return(
                    <BookContent
                        image={Items.image}
                        title={Items.title}
                        genre={Items.Genre.name}
                        rating={Items.AgeRating.initial}
                        meaning={Items.AgeRating.meaning}
                        />
                    )
                })}
            </Container>
            <Footer/>
            </div>
        );
    }
}

//state
const mapStatetoProps = state => ({
    MovieData: state.ReducerMovie.movieid,
})

export default connect(mapStatetoProps)(Moviepage);

const style = {
    container: {
        backgroundColor:'#222324'
    },
    movie: {
        padding:'4% 0vw 4% 2vw',
        backgroundColor:'#222324'
    },
}