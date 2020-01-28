import React, {Component} from 'react';
import {Menu, Icon, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import Loginpage from '../Page/Loginpage';
import Registerpage from '../Page/Registerpage';
import Profile from '../Component/Profile';

class Header extends Component {
    render(){
        return(
            <div className='header-container' style={style.background}>
            <Container fluid style={style.container}>
                <Menu text style={style.menu}>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to='/'>
                                <Icon size='big' name='ticket' style={style.icon}/>
                                <span style={style.title}>Cinema-Tix</span>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                {localStorage.isLoggedIn == 1 ? (
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Profile/>
                        </Menu.Item>
                    </Menu.Menu>
                ) : (
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Loginpage/>
                        </Menu.Item>

                        <Menu.Item>
                            <Registerpage/>
                        </Menu.Item>
                    </Menu.Menu>
                )}
                </Menu>
            </Container>
        </div>
    )
};
}

const style = {
    icon: {
        color:'#fff',
        margin: '1vh 1vw 1vh 0vw'
    },
    container: {
        height:'80px',
        margin:'0px 0px',
        padding:'1vh 0vw',
        alignText: 'center',
        verticalAlign:'bottom'
    },
    background: {
        backgroundColor:'#222324',
        height:'10%',
        alignText: 'center',
    },
    button: {
        margin:'1vh 0vw'
    },
    title: {
        width:'40vw',
        color:'#f72323',
        fontSize:'28px',
        fontWeight:'bold',
        position:'absolute',
        bottom:'15%'
    },
    menu:{
        margin:'0vh 3.5%'
    }
}
export default Header;
