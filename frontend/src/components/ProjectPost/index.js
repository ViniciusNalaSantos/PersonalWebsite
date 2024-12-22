import { useParams } from 'react-router';
import './projectPost.css';
import ProjectsList from '../../assets/json/projectsList.json';
import Image from 'react-bootstrap/Image';


function ProjectPost() {
    const textoVisaoGeral = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ut odio bibendum posuere. Etiam varius fermentum enim, nec aliquet ipsum sodales ac. Praesent porttitor, dolor sed fermentum commodo, sapien odio tristique tellus, id condimentum nunc lorem eu enim. Proin ut eros ullamcorper, fermentum arcu suscipit, auctor orci. Proin et rutrum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tortor diam, ultrices a placerat in, mollis ut est. Sed varius feugiat ultrices. Quisque id tincidunt dolor."

    const param = useParams();

    const project = ProjectsList.find( (project) => {
        return project.id === Number(param.id)
    })

        return (
            <div>
                <h1>{project.title}</h1>
                <h2>{project.subtitle}</h2>
                <Image src={`/assets/projects/${project.id}/card_photo.png`} />                
                <section>
                    <h3>Visão Geral</h3>
                    <p>{textoVisaoGeral}</p>
                </section>
                <h3>Tecnologias Usadas</h3>
            </div>
        )
}

export default ProjectPost;