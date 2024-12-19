import './projectCard.css';
import Card from 'react-bootstrap/Card';


function ProjectCard({ project }) {
    return (
        <Card className='projects-cards-card'>
            <Card.Img variant="top" src={`/assets/projects/${project.id}/card_photo.png`} className='projects-cards-card-image' />            
            <Card.Body>
                <Card.Title className='projects-cards-card-title'>{project.title}</Card.Title>
                <Card.Text className='projects-cards-card-subtitle'>{project.subtitle}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;