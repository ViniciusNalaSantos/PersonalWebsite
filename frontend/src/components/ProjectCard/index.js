import { Link } from 'react-router';
import './projectCard.css';
import Card from 'react-bootstrap/Card';
import PublicEnvironmentUrl from '../../assets/json/environmentVariables.json';


function ProjectCard({ project }) {
    return (
        <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }} className='projects-link' >
            <Card className='projects-link-card'>
                <Card.Img variant="top" src={`./${PublicEnvironmentUrl.PublicEnvironmentUrl}/images/projects/${project.id}/card_photo.png`}/>            
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.subtitle}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{`Última atualização: ${project.lastUpdate}`}</small>
                </Card.Footer>
            </Card>
        </Link>
    )
}

export default ProjectCard;