import './projects.css';
import Card from 'react-bootstrap/Card';
/* Images imports */
import {
    ImageParametricNonParametric,
    ImageGradientDescent,
    ImageClustering2,
    ImageClustering3
} from '../Images'


function Projects() {
    const subtitle = "Um espaço onde cada criação é uma expressão da minha visão e do meu compromisso com a qualidade."

    return (
        <div id='projects'>
            <h1 id='projects-title'>Projetos</h1>
            <h2 id='projects-subtitle'>{subtitle}</h2>
            <div id='projects-cards'>
                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageParametricNonParametric} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageGradientDescent} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageClustering3} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageClustering2} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Projects