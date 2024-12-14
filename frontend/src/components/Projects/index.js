import './projects.css';
import Card from 'react-bootstrap/Card';
import ProjectsList from '../../json/projectsList.json';


function Projects() {
    const subtitle = "Um espaço onde cada criação é uma expressão da minha visão e do meu compromisso com a qualidade."

    return (
        <div id='projects'>
            <h1 id='projects-title'>Projetos</h1>
            <h2 id='projects-subtitle'>{subtitle}</h2>
            <ul id='projects-cards'>
                {ProjectsList.map( (project) => (
                    <li key={project.id}>
                        
                    </li>
                ))}

                    <Card className='projects-cards-card'>
                        <Card.Img variant="top" src={ImageParametricNonParametric} className='projects-cards-card-image' />
                        <Card.Body>
                            <Card.Title className='projects-cards-card-title'>Modelos ML Paramétricos x Não-paramétricos</Card.Title>
                            <Card.Text className='projects-cards-card-subtitle'>
                            Entendendo dois conceitos tão essenciais no mundo do Machine Learning
                        </Card.Text>
                        </Card.Body>
                    </Card>

                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageParametricNonParametric} className='projects-cards-card-image' />
                    <Card.Body>
                        <Card.Title className='projects-cards-card-title'>Modelos ML Paramétricos x Não-paramétricos</Card.Title>
                        <Card.Text className='projects-cards-card-subtitle'>
                            Entendendo dois conceitos tão essenciais no mundo do Machine Learning
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageGradientDescent}  className='projects-cards-card-image' />
                    <Card.Body>
                        <Card.Title className='projects-cards-card-title'>Gradient Descent: Concept & Manual Python Implementation</Card.Title>
                        <Card.Text className='projects-cards-card-subtitle'>
                            Understanding Gradient Descent
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageClustering3} className='projects-cards-card-image' />
                    <Card.Body>
                        <Card.Title className='projects-cards-card-title'>Clustering: Extracting Patterns from Data & Cluster Interpretation + Plotly [Pt.3]</Card.Title>
                        <Card.Text className='projects-cards-card-subtitle'>
                            Customers segmentation based on their credit card usage behavior
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='projects-cards-card'>
                    <Card.Img variant="top" src={ImageClustering2} className='projects-cards-card-image' />
                    <Card.Body>
                        <Card.Title className='projects-cards-card-title'>Clustering: Extracting Patterns From Data & Metrics + Cluster Validation [Pt.2]</Card.Title>
                        <Card.Text className='projects-cards-card-subtitle'>
                            Customers segmentation based on their credit card usage behavior
                        </Card.Text>
                    </Card.Body>
                </Card>
            </ul>
        </div>
    )
}

export default Projects