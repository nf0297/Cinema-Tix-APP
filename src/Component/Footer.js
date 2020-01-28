import React, {Component} from 'react';
import {Grid, Container, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div>
                <Container fluid style={style.container}> 
                    <Container>
                        <Grid column={4} style={style.grid}>
                            <Grid.Column width={7}>
                                <Grid.Row>
                                    <Icon size='big' name='ticket' style={style.icon}/>
                                    <span style={style.title}>Cinema-Tix</span>
                                </Grid.Row>
                                <Grid.Row>
                                    <p>Cinema-Tix is a web application to book movie ticket from your favourite cinema near you.</p>
                                </Grid.Row>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <p style={style.textTittle}>Resources</p>
                                <p style={style.text}>FAQ</p>
                                <p style={style.text}>Privacy & Policy</p>
                            </Grid.Column>

                            <Grid.Column width={3}>
                                <p style={style.textTittle}>Company</p>
                                <p style={style.text}>About Us</p>
                                <p style={style.text}>Contact</p>
                                <p style={style.text}>Facebook</p>
                                <p style={style.text}>Instagram</p>
                                <p style={style.text}>Twitter</p>
                            </Grid.Column>
                            
                            <Grid.Column width={3}>
                                <p style={style.textTittle}>Legal</p>
                                <p style={style.text}>Terms & Conditions</p>
                            </Grid.Column>
                        </Grid>
                    </Container>
                    <Container fluid style={style.footer}>
                        <label style={style.textBottom}>Since 2020. All Right Reserved.</label>
                    </Container>
                </Container>
            </div>
        )
    };
}

const style = {
    container: {
        backgroundColor:'#222324'
    },
    grid: {
        padding: '6vh 0vw',
        color:'#fff'
    },
    icon: {
        marginBottom:'2vh',
        marginRight:'1vw'
    },
    title: {
        color:'#f72323',
        fontSize:'28px',
        fontWeight:'bold'
    },
    text: {
        margin:'0vh 0vw'
    },
    textTittle: {
        fontWeight: 'bold'
    },
    textBottom: {
        fontWeight: 'bold',
        color: '#fff',
    },
    footer: {
        backgroundColor: '#242121',
        padding:'1vh 0vw',
        textAlign:'center'
    }
}

export default Footer;