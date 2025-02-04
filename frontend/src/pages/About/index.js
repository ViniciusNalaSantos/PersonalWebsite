import "./about.css";
import StandardButton from "../../components/ui/StandardButton";
import Image from 'react-bootstrap/Image';
import Text from '../../assets/json/texts.json';

function About() {
    const paragraphs = Text.aboutText.split('\n');

  return (
    <>
    <div className="about">
        <div className="about-main">
          <h1 className="about-main-title" >Então, quem sou eu?</h1>
          {paragraphs.map( (paragraph) => (
            <p className="about-main-text">{paragraph}</p>                        
          ))}          
          <div className="about-main-button">
            <StandardButton to='/#/contact' type='reset'>CONTATO</StandardButton>
          </div>
        </div>
        <Image src={`./images/jpg/about_picture.jpg`} alt="Men seated on a chair" className="about-image"></Image>
    </div>    
    </>
  )
}

export default About