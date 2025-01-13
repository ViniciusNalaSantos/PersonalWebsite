import './contactForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormButton from '../FormButton';
import FormField from '../../FormField';

function ContactForm() {
  return (
    <Form className="contact-form">
        <div id="contact-form-content">
            <h2 className="contact-form-content-title">Mande uma mensagem!</h2>

            <div className="contact-form-content-name">
                <FormField>NOME*</FormField>
            </div>

            <div className="contact-form-content-email">
                <FormField>EMAIL*</FormField>
            </div>

            <div className="contact-form-content-subject">
                <FormField>ASSUNTO*</FormField>
            </div>

            <h3 className="contact-form-content-subtitle">Me conte sobre o que gostaria de conversar*:</h3>

            <div className="contact-form-content-text">
                <FormField as='textarea' rows={4}></FormField>
            </div>

            <div className='contact-form-content-button'>
                <FormButton>Enviar</FormButton>
            </div>
        </div>
    </Form>
  )
}

export default ContactForm;