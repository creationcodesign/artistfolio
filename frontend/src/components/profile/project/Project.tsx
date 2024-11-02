import { useState } from 'react'
import { Icon } from '@ailibs/feather-react-ts'
import defaultImg from '../../../assets/images/default-img-small.png'
import { Thumbnail } from '../../Thumbnail'
import DeleteProject from './DeleteProject'


export default function Project({ setProjectAction, project }: any) {
    const [isActive, setIsActive] = useState(false)

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
                    <Icon name="trash-2" onClick={() => setIsActive(true)} />
                    <Icon name="edit-3" onClick={() => setProjectAction('edit')} />
                </div>
            </div>


            {isActive &&
                <DeleteProject
                    project={project}
                    setIsActive={setIsActive}
                />
            }

        </div>
    )
}
