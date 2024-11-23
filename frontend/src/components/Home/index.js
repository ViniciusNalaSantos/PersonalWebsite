import "./home.css"
import ProfileImage from "../../assets/jpg/linkedln_profile.jpg"
import { FaHackerrank , FaGithub, FaLinkedinIn, FaMediumM, FaKaggle } from "react-icons/fa";

function Home() {
    const text = "Lorem ipsum dolor sit amet. Vel animi repudiandae et quos deleniti a unde quia. In aliquam eius hic illum blanditiis At velit alias a iste sunt qui laborum numquam hic illum excepturi. Est nihil voluptatum sit consequuntur harum sit tempora soluta."

    return (
        <div className="home">
            <img src={ProfileImage} alt="Profile photo" className="home-image" />
            <h1 className="home-title" >Olá, eu sou o Vinícius.</h1>
            <h2 className="home-subtitle" >Estagiário em Engenharia de Software @ <b className="home-subtitle-company">Viasoft Korp</b></h2>
            <section className="home-text">{text}</section>
            <icon className="home-icons">
                <div className="home-icons-square"><a href='https://www.hackerrank.com/profile/vinicius_nala' className='home-icons-square-hackerrank'><FaHackerrank /></a></div>
                <div className="home-icons-square"><a href='https://github.com/ViniciusNalaSantos' className='home-icons-square-github'><FaGithub /></a></div>
                <div className="home-icons-square"><a href='https://www.linkedin.com/in/viniciusnala/' className='home-icons-square-linkedln'><FaLinkedinIn /></a></div>
                <div className="home-icons-square"><a href='https://medium.com/@viniciusnala' className='home-icons-square-medium'><FaMediumM /></a></div>
                <div className="home-icons-square"><a href='https://www.kaggle.com/viniciusnalasantos' className='home-icons-square-kaggle'><FaKaggle /></a></div>
            </icon>
            <div className="home-animation" />
        </div>
    )
}

export default Home