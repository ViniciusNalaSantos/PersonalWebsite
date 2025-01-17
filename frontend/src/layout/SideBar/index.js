import './sideBar.css';
import { IoClose } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function SideBar() {
    return (
        <div className='side-bar'>
            <div className='side-bar-top'>
                <Button><IoClose /></Button>
            </div>
            <Navbar className='side-bar-nav'>
                <Container>
                    <Nav.Link href="/#/home">INÍCIO</Nav.Link>
                </Container>
            </Navbar >
            <Navbar className='side-bar-nav'>
                <Container>
                    <Nav.Link href="/#/about">SOBRE</Nav.Link>
                </Container>
            </Navbar>
            <Navbar className='side-bar-nav'>
                <Container>
                    <Nav.Link href="/#/contact">CONTATO</Nav.Link>                    
                </Container>         
            </Navbar>
            <Navbar className='side-bar-nav'>
                <Container>                    
                    <Nav.Link href="/#/projects">PROJETOS</Nav.Link>
                </Container>         
            </Navbar>
        </div>
    )
}

export default SideBar;