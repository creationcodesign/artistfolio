import defaultImg from '../../assets/images/default-img-small.png'
import { Thumbnail } from '../Thumbnail'

export default function SelectedWorkCard({ project }: any) {

    return (
        <div className="project selected-work">
            <div className='project-image'>
                {project.thumbnail.startsWith('data:image/') && project.thumbnail.includes(';base64,') ?
                    <Thumbnail thumbnail={project.thumbnail} />
                    :
                    <img src={project.thumbnail || defaultImg}
                        alt={project.thumbnail ? 'Project Thumbnail' : 'Default Thumbnail'}
                        width={300}
                    />
                }
                {/* <img src={project.thumbnail || defaultImg}
                    alt={project.thumbnail ? 'Project Thumbnail' : 'Default Thumbnail'}
                    width={300}
                /> */}
            </div>

            <div className='project-info'>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-technology">
                    {project.technologies.map((tech: string, index: number) => (
                        <span key={index} className={`${tech !== '' ? 'tag' : ''}`}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
