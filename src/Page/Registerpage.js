import React, {Component} from 'react';
import {Grid, Button, Form, Modal, Icon, Header} from 'semantic-ui-react';
import axios from 'axios';

class Registerpage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: "",
          fullname: "",
          email: "",
          username: "",
          password: "",
          image: "",
          isLoggedIn: ""
        };
      }
    
      onChangeFullname = e => {
        this.setState({ fullname: e.target.value });
      };
    
      onChangeEmail = e => {
        this.setState({ email: e.target.value });
      };
    
      onChangeUsername = e => {
        this.setState({ username: e.target.value });
      };
    
      onChangePassword = e => {
        this.setState({ password: e.target.value });
      };
    
      onChangeImage = e => {
        this.setState({ image: e.target.value });
      };
    
      onSubmitRegister = e => {
        const fullname = this.state.fullname;
        const email = this.state.email;
        const username = this.state.username;
        const password = this.state.password;
        const image = this.state.image;
    
        const dataUser = {
          fullname:fullname,
          email:email,
          username:username,
          password:password,
          image:image
        };
        console.log(dataUser);
    
        axios
        .post("https://ke-ticket-app.herokuapp.com/api/v1/register", dataUser)
        .then(res => {
          console.log(res.data.user)
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("fullname", res.data.fullname);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("isLoggedIn", 1);
          alert("Account Created Successfully!")
          window.location.reload();
        })
        .catch(res => {
          console.log(res);
          alert("Register Fail!")
        })
      };
    
      componentDidMount() {
        if (localStorage.getItem("user")) {
          this.setState({
            id: localStorage.id,
            fullname: localStorage.fullname,
            email: localStorage.email,
            username: localStorage.username,
            password: localStorage.password,
            image: localStorage.image
          });
        } else {
          this.setState({
            fullname: '',
            email: '',
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
                icon='signup' 
                content='Sign Up' 
                color='red' 
                style={style.button}
                />
            } closeIcon>
                <div>
                <Grid style={{margin:"0vh 5vw 0vh 5vw"}}>
                    <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Header
                        size='large'
                        content='REGISTER'
                        style={style.title}
                        />
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column>
                        <Form on onSubmit={this.onSubmitRegister}>
                        <Form.Input transparent fluid type='text' placeholder='Name' style={style.formInput} value={this.state.fullname} onChange={this.onChangeFullname} />
                        <Form.Input transparent fluid type='text' placeholder='Email' style={style.formInput} value={this.state.email} onChange={this.onChangeEmail} />
                        <Form.Input transparent fluid type='text' placeholder='Username' style={style.formInput} value={this.state.username} onChange={this.onChangeUsername} />
                        <Form.Input transparent fluid type='password' placeholder='Password' style={style.formInput} value={this.state.password} onChange={this.onChangePassword} />
                        <Form.Input transparent fluid type='text' placeholder='Image' style={style.formInput} value={this.state.image} onChange={this.onChangeImage} />
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

export default Registerpage;

const style={
    container: {

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
    button: {
        margin:'1vh 0vw'
    },
    buttonProperties: {
        color:'white', 
        width:'15vw', 
        marginTop:'5vh',
        marginBottom:'10vh',
    }
}