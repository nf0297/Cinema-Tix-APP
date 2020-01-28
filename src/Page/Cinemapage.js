import React, {Component} from 'react';
import {Container, Form, Grid, Button} from 'semantic-ui-react';
import axios from 'axios';

import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Navmenu from '../Component/Navmenu';
import CinemaTop from '../Component/CinemaTop';
import CinemaBottom from '../Component/CinemaBottom';

import {getMovieByID} from '../Redux/_actions/ActionMovie';
import {getAllCinema} from '../Redux/_actions/ActionCinema'
import {connect} from 'react-redux'; 


class Cinemapage extends Component {
  
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.dispatch(getMovieByID(id));
    this.props.dispatch(getAllCinema());
    console.log(id);
    }
    
    render(){
      const movie = this.props.MovieData;
      const cinemaData = this.props.CinemaData;
        return(
                <div className='cinema-container' style={style.container}>
                <Container fluid style={style.content}>
                <Header/>
                <Navmenu/>
                <Container>
                {movie.map(Items => {
                    return(
                    <CinemaTop
                        image={Items.image}
                        title={Items.title}
                        duration={Items.duration}
                        />
                    )
                })}
                {cinemaData.map(Items =>
                    <CinemaBottom
                        cinema={Items.name}
                        time={Items.Halls.time}
                        />
                )};
                        <CinemaBottom/> 
                </Container>
                <Footer/>
                </Container>
                </div>
        );
    }
}
//state
const mapStatetoProps = state => ({
  MovieData: state.ReducerMovie.movieid,
  CinemaData: state.ReducerCinema.cinemas
})

export default connect(mapStatetoProps)(Cinemapage);

const style={
    container:{
      backgroundColor:'#222324',
      borderStyle:'solid',
      borderWidth:'5px',
      borderColor:'#fff'
    
    },
    button: {
        margin:'2vh 0vw'
    },
    formInput: {
        borderBottom:'2px solid black',
        marginBottom:'5vh',
        fontSize:'20px',
    },
    title: {
        color:'#fff',
        fontSize:'40px',
        padding:'5vh 0vw 5vh 0vw',
    },
    buttonProperties: {
        color:'white', 
        width:'15vw', 
        marginTop:'5vh',
        marginBottom:'10vh',
      },
    grid: {
      margin:'0vh 5vw 0vh 5vw'
    }
}