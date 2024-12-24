import "./contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaLinkedinIn} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MediaCard from "../../components/ui/MediaCard";
import ContactForm from "../../components/ui/ContactForm";


function Contact() {
  return (
    <div className="contact">
        <div className="contact-main">            
            <h1 className="contact-main-item" id="contact-main-title">Sinta-se livre para entrar entrar em contato.</h1>
            <h2 className="contact-main-item" id="contact-main-subtitle">Seria ótimo conversar!</h2>
            <section className="contact-main-item" id="contact-main-media">Envie uma mensagem nas minhas mídias:</section>
            <div className="contact-main-item" id="contact-main-media-card">
                <MediaCard text='Linkedln:' href='https://www.linkedin.com/in/viniciusnala/'><FaLinkedinIn /></MediaCard>
                <MediaCard text='Email:' href='vinicius.nala@gmail.com'><MdEmail /></MediaCard>
            </div>           
        </div>                   
        <ContactForm />
    </div>
  )
}

export default Contact