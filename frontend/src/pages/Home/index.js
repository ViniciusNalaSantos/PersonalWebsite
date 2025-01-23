import "./home.css";
import { FaHackerrank , FaGithub, FaLinkedinIn, FaMediumM, FaKaggle } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import SquareIconLink from "../../components/ui/SquareIconLink";
import Text from '../../assets/json/texts.json';

function Home() {
    return (
        <div className="home">
            <Image src={"/images/jpg/linkedln_profile.jpg"} alt="Profile photo" className="home-image"/>
            <h1 className="home-title" >Olá, eu sou o Vinícius.</h1>
            <h2 className="home-subtitle" >Estagiário em Engenharia de Software @ <b className="home-subtitle-company">Viasoft Korp</b></h2>
            <section className="home-text">{Text.homeText}</section>
            <icon className="home-icons">
                <SquareIconLink to='https://www.hackerrank.com/profile/vinicius_nala'><FaHackerrank /></SquareIconLink>
                <SquareIconLink to='https://github.com/ViniciusNalaSantos'><FaGithub /></SquareIconLink>
                <SquareIconLink to='https://www.linkedin.com/in/viniciusnala/'><FaLinkedinIn /></SquareIconLink>
                <SquareIconLink to='https://medium.com/@viniciusnala'><FaMediumM /></SquareIconLink>
                <SquareIconLink to='https://www.kaggle.com/viniciusnalasantos'><FaKaggle /></SquareIconLink>
            </icon>
            <div className="home-arrow-animation" >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Home