import { Icon } from '@ailibs/feather-react-ts'
import defaultImg from '../../assets/images/default-img-small.png'

export default function SelectedWorkCard({ project }: any) {
    return (
        <div className="project selected-work">
            <div className='selected-work-content'>
                {project.thumbnail.startsWith('data:image/') && project.thumbnail.includes(';base64,') ?
                    <div className='project-image'
                        style={{ backgroundImage: 'url(' + defaultImg + ')' }}
                    ></div>
                    :
                    <div className='project-image'
                        style={{ backgroundImage: `url(${project.thumbnail || 'url(' + defaultImg + ')'})` }}
                    > </div>
                }
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
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>
                <Icon name="arrow-right" size={28} />
            </a>
        </div>
    )
}
