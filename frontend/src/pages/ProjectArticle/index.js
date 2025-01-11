import { useParams } from 'react-router';
import './projectArticle.css';
import ProjectsList from '../../assets/json/projectsList.json';
import Image from 'react-bootstrap/Image';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';


const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / 100;
    return `${(percent * 100).toFixed(0)}%`;
  };

function ProjectArticle() {
    const textoVisaoGeral = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada ut odio bibendum posuere. Etiam varius fermentum enim, nec aliquet ipsum sodales ac. Praesent porttitor, dolor sed fermentum commodo, sapien odio tristique tellus, id condimentum nunc lorem eu enim. Proin ut eros ullamcorper, fermentum arcu suscipit, auctor orci. Proin et rutrum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tortor diam, ultrices a placerat in, mollis ut est. Sed varius feugiat ultrices. Quisque id tincidunt dolor."

    const param = useParams();

    const project = ProjectsList.find( (project) => {
        return project.id === Number(param.id)
    })

        return (
            <div className='project-article'>
                <h1 className='project-article-title'>{project.title}</h1>
                <h2 className='project-article-subtitle'>{project.subtitle}</h2>
                <Image className=' project-article-image' src={`/images/projects/${project.id}/card_photo.png`} />                
                <section className='project-article-section'>
                    <h3 className='project-article-section-title'>Visão Geral</h3>
                    <p className='project-article-section-text'>{textoVisaoGeral}</p>
                </section>
                <section className='project-article-section'>
                    <h3 className='project-article-section-title' id='technology-used'>Tecnologias Usadas</h3>
                    <PieChart id='pie-chart'
                        series={[
                            {
                            data: project.technologies.map( (data) => (
                                { value: data.percentage * 100, label: data.language }
                            )),
                            arcLabel: getArcLabel,
                            highlightScope: { fade: 'global', highlight: 'item' },
                            innerRadius: 50,
                            },
                        ]}
                        sx= {{
                            [`& .${pieArcLabelClasses.root}`]: {
                              fill: 'white',
                              fontSize: 14,
                            },
                          }}
                        width={400}
                        height={200}
                    />
                </section>
            </div>
        )
}

export default ProjectArticle;