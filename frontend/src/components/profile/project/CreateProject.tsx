import { useState } from "react"
import { useProjectStore } from "../../../store/project"
import { IProject } from "../../../interface/IProject"
import { useToast } from "../../../context/ToastContext";


export default function CreateProject() {
    const { addToast } = useToast();

    const [project, setProject] = useState<IProject>({
        _id: '',
        name: '',
        description: '',
        technologies: [''],
        thumbnail: '',
        link: '',
    })

    const { createProject } = useProjectStore()

    const handleCreateProject = async () => {
        console.log(project)
        const { success, message } = await createProject(project)
        const toastMessage = message || 'An unexpected error occurred';

        if (success) {
            addToast(toastMessage, 'success')
        } else {
            addToast(toastMessage, 'error')
        }

        setProject({
            _id: '',
            name: '',
            description: '',
            technologies: [''],
            thumbnail: '',
            link: '',
        })
    }


    return (
        <div className="project-action-section create-project">
            <h3 className="project-action__title">
                Create Project
            </h3>

            <form className="form-project-create" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="project-title">
                        <span>project name</span>
                        <input type="text" name="name" id="project-title" onChange={(e) => setProject({ ...project, name: e.target.value })} />
                    </label>
                    <label htmlFor="project-description">
                        <span>project description</span>
                        <input type="text" name="description" id="project-description" onChange={(e) => setProject({ ...project, description: e.target.value })} />
                    </label>
                    <label htmlFor="project-technologies">
                        <span>project technologies</span>
                        <input type="text" name="technologies" id="project-technologies" onChange={(e) => setProject({ ...project, technologies: e.target.value.split(',') })} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="project-thumbnail">
                        <span>project thumbnail</span>
                        <input type="text" name="thumbnail" id="project-thumbnail" onChange={(e) => setProject({ ...project, thumbnail: e.target.value })} />
                    </label>
                    <label htmlFor="project-link">
                        <span>project link</span>
                        <input type="text" name="link" id="project-link" onChange={(e) => setProject({ ...project, link: e.target.value })} />
                    </label>
                </div>
            </form>
            <button onClick={handleCreateProject}>
                save
            </button>
        </div>
    )
}
