import React, {Component, createRef} from 'react';
import {Menu, Container, Image, Divider, Ref, Sticky} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Navmenu extends Component {
    contextRef = createRef()

    state = {
        activeItem: ''
    }

    handleClick = (e, {name}) => {
        this.setState({activeItem:name})
    }
    
    render(){
        const {activeItem} = this.state
        return(
            <div className='navbar-container' style={style.container}>
                <Container fluid className='navbar-content' style={style.navbar}>
                        <Menu secondary fluid style={style.content}>
                            <Menu.Item 
                                name='Now Playing'
                                active={activeItem === 'Now Playing'}
                                onClick={this.handleClick}
                                icon='bullhorn'
                                style={style.menu}
                            />
                            <Menu.Item 
                                name='Upcoming'
                                active={activeItem === 'Upcoming'}
                                onClick={this.handleClick}
                                icon='calendar alternate outline'
                                style={style.menu}
                            />
                            <Menu.Item 
                                name='Theatres'
                                active={activeItem === 'Theatres'}
                                onClick={this.handleClick}
                                icon='map marker alternate'
                                style={style.menu}
                            />
                            <Menu.Item 
                                name='Promotion'
                                active={activeItem === 'Promotion'}
                                onClick={this.handleClick}
                                icon='tags'
                                style={style.menu}
                            />
                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Image src='https://21cineplex.com//theme/v5/assets/img/imax-menu.png'/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Image src='https://21cineplex.com//theme/v5/assets/img/dolby-menu.png'/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Image src='https://21cineplex.com//theme/v5/assets/img/mtix-menu.png'/>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                </Container>
            </div>
        );
    }
}

export default Navmenu;

const style = {
    container: {
        backgroundColor:'#222324'
    },
    navbar: {
        height:'50px',
        backgroundColor:'#fff',
    },
    menu: {
        fontSize:'16px',
    },
    content: {
        padding:'0vh 3.5%'
    }
}