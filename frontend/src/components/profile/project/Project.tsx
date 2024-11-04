import { useState } from 'react'
import { Icon } from '@ailibs/feather-react-ts'
import defaultImg from '../../../assets/images/default-img-small.png'
import { Thumbnail } from '../../Thumbnail'
import DeleteProject from './DeleteProject'
import EditProject from './EditProject'


export default function Project({ project }: any) {
    const [isActive, setIsActive] = useState(false)
    const [isEditActive, setIsEditActive] = useState(false)

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
                {/* <img src={project.thumbnail || defaultImg}
                    alt={project.thumbnail ? 'Project Thumbnail' : 'Default Thumbnail'}
                    width={300}
                /> */}
                <h3>{project.name}</h3>
            </div>

            <div className="project-actions">
                <div className='project-actions__icons'>
                    <Icon name="edit-3" onClick={() => setIsEditActive(true)} />
                    <Icon name="trash-2" onClick={() => setIsActive(true)} />
                </div>
            </div>


            {isActive &&
                <DeleteProject
                    project={project}
                    setIsActive={setIsActive}
                />
            }

            {isEditActive &&
                <EditProject
                    project={project}
                    setIsEditActive={setIsEditActive}
                />
            }

        </div>
    )
}
