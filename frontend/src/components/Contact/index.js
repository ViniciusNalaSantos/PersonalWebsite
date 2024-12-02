import "./contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <div>
        <div>
            <div>
                <h1>Sinta-se livre para entrar entrar em contato.</h1>
                <h2>Seria ótimo conversar!</h2>
                <section>Envie uma mensagem nas minhas mídias:</section>
                <div>
                    <icon></icon>
                    <div>
                        <span>Linkedln:</span>
                        <a href="https://www.linkedin.com/in/viniciusnala/">https://www.linkedin.com/in/viniciusnala/</a>                    
                    </div>
                </div>
                <div>
                    <icon></icon>
                    <div>
                        <span>Email:</span>
                        <a href="vinicius.nala@gmail.com">vinicius.nala@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        <form>            
            <Form>
                <h2>Mande uma mensagem!</h2>

                <Form.Group className="mb-3">                    
                    <Form.Control placeholder="NOME*" />                    
                </Form.Group>

                <Form.Group className="mb-3">                    
                    <Form.Control placeholder="EMAIL*" />                    
                </Form.Group>

                <Form.Group className="mb-3">                    
                    <Form.Control placeholder="ASSUNTO*" />                    
                </Form.Group>

                <h3>Me conte sobre o que gostaria de conversar*:</h3>

                <Form.Group className="mb-3">                    
                    <Form.Control as="textarea" rows={4} />                    
                </Form.Group>
            </Form>
        </form>            
    </div>
  )
}

export default Contact