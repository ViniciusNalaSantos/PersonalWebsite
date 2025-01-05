import './projects.css';
import ProjectsList from '../../assets/json/projectsList.json';
import ProjectCard from '../../components/ProjectCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projects() {
    const subtitle = "Um espaço onde cada criação é uma expressão da minha visão e do meu compromisso com a qualidade."

    return (
        <div id='projects'>
            <h1 id='projects-title'>Projetos</h1>
            <h2 id='projects-subtitle'>{subtitle}</h2>
            <Row xs={1} md={2} className="g-5 projects-cards">
                {ProjectsList.slice().reverse().map( (project) => (
                    <Col key={project.id}>
                        <ProjectCard project={project}/>
                    </Col>
                ))} 

            </Row>
        </div>
    )
}

export default Projects