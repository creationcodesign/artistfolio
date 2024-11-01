import { Icon } from '@ailibs/feather-react-ts'
import defaultImg from '../../../assets/images/default-img-small.png'
import { Thumbnail } from '../../Thumbnail'

export default function Project({ setProjectAction, project }: any) {
    return (
        <div className="project">
            <div className='project-content'>
                {project.thumbnail.startsWith('data:image/') && project.thumbnail.includes(';base64,') ?
                    <Thumbnail thumbnail={project.thumbnail} />
                    :
                    <img src={project.thumbnail || defaultImg}
                        alt={project.thumbnail ? 'Project Thumbnail' : 'Default Thumbnail'}
                        width={300}
                    />
                }
                <h3>{project.name}</h3>
            </div>

            <div className="project-actions">
                <Icon name="eye" onClick={() => setProjectAction('view')} />
                <div className='project-actions__icons'>
                    <Icon name="trash-2" onClick={() => setProjectAction('delete')} />
                    <Icon name="edit-3" onClick={() => setProjectAction('edit')} />
                </div>
            </div>
        </div>
    )
}
