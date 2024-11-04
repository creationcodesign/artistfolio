import { useEffect, useState } from "react";
import { Icon } from "@ailibs/feather-react-ts";
import { useToast } from "../../../context/ToastContext";
import { useProjectStore } from "../../../store/project";


export default function DeleteProject({ project, setIsActive }: any) {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const { deleteProject } = useProjectStore()
    const { addToast } = useToast();


    const handleCancel = () => {
        setConfirmDelete(false)
        setIsActive(false)
    }


    const handleDeleteProject = async () => {
        if (confirmDelete) {
            console.log("DELETE ID:", project._id)
            try {
                const { success, message } = await deleteProject(project._id);
                if (success) {
                    addToast('Project deleted successfully', 'success');
                } else {
                    addToast(`Error: ${message}`, 'error');
                }
            } catch (error: any) {
                addToast(`Deletion failed: ${error.message}`, 'error');
            } finally {
                // reset confirmation state
                setConfirmDelete(false);
            }
        }
    };


    useEffect(() => {
        if (confirmDelete) {
            handleDeleteProject();
        }
    }, [confirmDelete]);


    return (
        <div className="project-action modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Delete Project</h3>
                    <Icon name="x" onClick={handleCancel} />
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this project?</p>
                    <div className="project-action__buttons">
                        <button onClick={() => setConfirmDelete(true)} className="btn-action-delete">
                            Yes
                        </button>
                        <button onClick={handleCancel} className="btn-action-cancel">
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
