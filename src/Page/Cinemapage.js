import React, {Component} from 'react';
import {Container, Form, Grid, Button} from 'semantic-ui-react';
import axios from 'axios';

import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Navmenu from '../Component/Navmenu';
import CinemaTop from '../Component/CinemaTop';
import CinemaBottom from '../Component/CinemaBottom';


class Cinemapage extends Component {
   
    
    render(){
        return(
                <div className='cinema-container' style={style.container}>
                <Container fluid style={style.content}>
                <Header/>
                <Navmenu/>
                <Container>
                  <CinemaTop/>
                  <CinemaBottom/> 
                </Container>
                <Footer/>
                </Container>
                </div>
        );
    }
}

export default Cinemapage;

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