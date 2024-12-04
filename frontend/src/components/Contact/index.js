import "./contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaLinkedinIn} from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Contact() {
  return (
    <div className="contact">
        <div className="contact-main">            
            <h1 className="contact-main-item" id="contact-main-title">Sinta-se livre para entrar entrar em contato.</h1>
            <h2 className="contact-main-item" id="contact-main-subtitle">Seria ótimo conversar!</h2>
            <section className="contact-main-item" id="contact-main-media">Envie uma mensagem nas minhas mídias:</section>
            <div className="contact-main-item" id="contact-main-media-card">
                <div className="contact-main-media-card">
                    <FaLinkedinIn className="contact-main-media-card-icon" />
                    <div className="contact-main-media-card-text" >
                        <span>Linkedln:</span>
                        <a className="contact-main-media-card-text-link" href="https://www.linkedin.com/in/viniciusnala/">https://www.linkedin.com/in/viniciusnala/</a>                    
                    </div>
                </div>
                <div className="contact-main-media-card">
                    <MdEmail className="contact-main-media-card-icon" />
                    <div className="contact-main-media-card-text" >
                        <span>Email:</span>
                        <a className="contact-main-media-card-text-link" href="vinicius.nala@gmail.com">vinicius.nala@gmail.com</a>
                    </div>
                </div>
            </div>            
        </div>                   
        <Form className="contact-form">
            <div id="contact-form-content">
                <h2 className="contact-form-content-title">Mande uma mensagem!</h2>

                <Form.Group className="mb-3 contact-form-content-name">                    
                    <Form.Control placeholder="NOME*" />                    
                </Form.Group>

                <Form.Group className="mb-3 contact-form-content-email">                    
                    <Form.Control placeholder="EMAIL*" />                    
                </Form.Group>

                <Form.Group className="mb-3 contact-form-content-subject">                    
                    <Form.Control placeholder="ASSUNTO*" />                    
                </Form.Group>

                <h3 className="contact-form-content-subtitle">Me conte sobre o que gostaria de conversar*:</h3>

                <Form.Group className="mb-3 contact-form-content-text">                    
                    <Form.Control as="textarea" rows={4} />                    
                </Form.Group>

                <Button variant="primary" type="submit" id="contact-form-content-button">
                    Enviar
                </Button>
            </div>
        </Form>            
    </div>
  )
}

export default Contact