import './projects.css';
import ProjectsList from '../../json/projectsList.json';
import ProjectCard from '../ProjectCard';


function Projects() {
    const subtitle = "Um espaço onde cada criação é uma expressão da minha visão e do meu compromisso com a qualidade."

    return (
        <div id='projects'>
            <h1 id='projects-title'>Projetos</h1>
            <h2 id='projects-subtitle'>{subtitle}</h2>
            <ul id='projects-cards'>
                {ProjectsList.slice().reverse().map( (project) => (
                    <li key={project.id}>
                        <ProjectCard project={project}/>
                    </li>
                ))}               
            </ul>
        </div>
    )
}

export default Projects