import { useState } from "react";
import { useProjectStore } from "../../../store/project";
import { IProject } from "../../../interface/IProject";
import { useToast } from "../../../context/ToastContext";
import { Icon } from "@ailibs/feather-react-ts";


export default function EditProject({ project, setIsEditActive }: any) {
    const { addToast } = useToast();

    const [updatedProject, setUpdatedProject] = useState<IProject>({
        _id: '',
        name: '',
        description: '',
        technologies: [''],
        thumbnail: '',
        link: '',
    })

    console.log("updatedProject:", updatedProject)
    console.log("project ID:", project._id)

    const { updateProject } = useProjectStore()

    const handleUpdateProject = async () => {
        const { success, message } = await updateProject(project._id, project)
        console.log("message:", message)
        const toastMessage = message || 'An unexpected error occurred.'

        if (success) {
            addToast(toastMessage, 'success')
            setIsEditActive(false)
        } else {
            addToast(toastMessage, 'error')
        }
    }


    return (
        <div className="project-action edit-project modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Edit Project</h3>
                    <Icon name="x" onClick={() => setIsEditActive(false)} />
                </div>
                <div className="modal-body">
                    <form className="form-project-create" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="project-title">
                                <span>project name</span>
                                <input type="text" name="name" id="project-title"
                                    defaultValue={project.name}
                                    onChange={(e) => setUpdatedProject({ ...updatedProject, name: e.target.value })}
                                />
                            </label>
                            <label htmlFor="project-description">
                                <span>project description</span>
                                <input type="text" name="description" id="project-description"
                                    defaultValue={project.description}
                                    onChange={(e) => setUpdatedProject({ ...updatedProject, description: e.target.value })}
                                />
                            </label>
                            <label htmlFor="project-technologies">
                                <span>project technologies</span>
                                <input type="text" name="technologies" id="project-technologies"
                                    defaultValue={project.technologies.join(',')}
                                    onChange={(e) => setUpdatedProject({ ...updatedProject, technologies: e.target.value.split(',') })}
                                />
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="project-thumbnail">
                                <span>project thumbnail</span>
                                <input type="text" name="thumbnail" id="project-thumbnail"
                                    defaultValue={project.thumbnail}
                                    onChange={(e) => setUpdatedProject({ ...updatedProject, thumbnail: e.target.value })}
                                />
                            </label>
                            <label htmlFor="project-link">
                                <span>project link</span>
                                <input type="text" name="link" id="project-link"
                                    defaultValue={project.link}
                                    onChange={(e) => setUpdatedProject({ ...updatedProject, link: e.target.value })}
                                />
                            </label>
                        </div>
                    </form>
                    <button onClick={handleUpdateProject} className="btn-action-save">
                        save
                    </button>
                </div>
            </div>
        </div>
    )
}
