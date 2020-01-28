import React, {Component} from 'react';
import {Modal, Form, Grid, Button, Header} from 'semantic-ui-react';
import axios from 'axios';

class Loginpage extends Component {
     // userData;

  constructor(props) {
    super(props);

    this.state = {
      id:'',
      username: '',
      password: '',
      isLoggedIn: ''
    }
  }

  //Event
  onChangeUsername = e => {
    this.setState({ username: e.target.value })
  }

  onChangePassword = e => {
    this.setState({ password: e.target.value })
  }

  onSubmitLogin = e => {
    const username = this.state.username;
    const password = this.state.password;
    console.log(this.state.username);
    axios
      .post("https://ke-ticket-app.herokuapp.com/api/v1/login", {
        username,
        password
      })
      .then(res => {
        if(res.data.error) {
        alert(res.data.message)  
        } else {
          console.log(res.data.user);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("fullname", res.data.fullname);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("isLoggedIn", 1);
          window.location.reload();
        }
        });
    };

  //Lifecycle
  componenetDidMount(){
    if (localStorage.getItem("user")) {
        this.setState({
          id: localStorage.id,
          name: localStorage.name,
          username: localStorage.username,
          password: localStorage.password
        });
      } else {
        this.setState({
          name: '',
          email: '',
          phone: '',
          username: '',
          password: '',
          image: ''
        });
      }
    }
    
    render(){
        return(
            <Modal size='tiny' trigger={
                <Button
                compact
                floated='right'
                content='Sign in'
                icon='sign in'
                style={style.button}
                />
            } closeIcon>
                <div className='login-container' style={style.container}>
                <Grid style={style.grid}>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                        <Header
                        size='large'
                        content='LOGIN'
                        style={style.title}
                        />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                        <Form onSubmit={this.onSubmitLogin}>
                            <Form.Input transparent fluid type='text' placeholder='Username' style={style.formInput} value={this.state.username} onChange={this.onChangeUsername} />
                            <Form.Input transparent fluid type='password' placeholder='Password' style={style.formInput} value={this.state.password}  onChange={this.onChangePassword} />
                            <Form.Field align='center'>
                            <Grid.Row>
                                <Grid.Column style={{textAlign:'center'}}>
                                <Button
                                compact
                                type='submit'
                                color='red'
                                content='Register'
                                size='huge'
                                style={style.buttonProperties}
                                />
                                </Grid.Column>
                            </Grid.Row>
                            </Form.Field>
                        </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
            </Modal>
        );
    }
}

export default Loginpage;

const style={
    container:{

    },
    button: {
        margin:'1vh 0vw'
    },
    formInput: {
        borderBottom:'2px solid black',
        marginBottom:'5vh',
        fontSize:'20px',
    },
    title: {
        color:'black',
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