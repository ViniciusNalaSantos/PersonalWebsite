import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StandardButton from '../StandardButton';

function ContactForm() {
  return (
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

            <StandardButton className='contact-form-content-button'>Enviar</StandardButton>
        </div>
    </Form>
  )
}

export default ContactForm