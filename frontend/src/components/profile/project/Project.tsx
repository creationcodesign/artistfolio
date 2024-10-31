import { Icon } from '@ailibs/feather-react-ts'
import defaultImg from '../../../assets/images/default-img-small.png'


export default function Project({ setProjectAction }: any) {
    return (
        <div className="project">
            <div className='project-content'>
                <img src={defaultImg} alt="project image" />
                <h3>Project Name</h3>
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
