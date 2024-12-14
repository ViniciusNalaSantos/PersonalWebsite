/* Images imports */
import {
    ImageParametricNonParametric,
    ImageGradientDescent,
    ImageClustering2,
    ImageClustering3
} from '../Images'

function ProjectCard() {
    return (
        <Card className='projects-cards-card'>
            <Card.Img variant="top" src={ImageParametricNonParametric} className='projects-cards-card-image' />
            <Card.Body>
                <Card.Title className='projects-cards-card-title'>Modelos ML Paramétricos x Não-paramétricos</Card.Title>
                <Card.Text className='projects-cards-card-subtitle'>
                Entendendo dois conceitos tão essenciais no mundo do Machine Learning
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;