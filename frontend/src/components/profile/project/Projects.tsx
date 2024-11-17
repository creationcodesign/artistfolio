import { useEffect, useState } from "react";
import { Icon } from "@ailibs/feather-react-ts";
import Project from "./Project";
import CreateProject from "./CreateProject";
import { useProjectStore } from "../../../store/project";
import { IProject } from "../../../interface/IProject";
import { updateProjectOrder } from "../../../hooks/updateProjectOrder";
import { useToast } from "../../../context/ToastContext";


export default function Projects() {
    const { addToast } = useToast();
    const [isAddActive, setIsAddActive] = useState<boolean>(false);
    const { getProjects, projects, setProjects } = useProjectStore();

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    const handleDragStart = (event: React.DragEvent, index: number) => {
        event.dataTransfer.setData("index", index.toString());
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault(); // Allow drop
    };

    const handleDrop = (event: React.DragEvent, targetIndex: number) => {
        const draggedIndex = parseInt(event.dataTransfer.getData("index"), 10);
        if (draggedIndex === targetIndex) return;

        const reorderedProjects = [...projects];
        const [draggedProject] = reorderedProjects.splice(draggedIndex, 1);
        reorderedProjects.splice(targetIndex, 0, draggedProject);

        setProjects(reorderedProjects); // Update the state with the new order
    };

    const handleSaveOrder = async () => {
        try {
            // Send the new order to the backend (the backend API should handle saving the new order of projects)
            const updatedProjects = projects.map((project, index) => ({
                ...project,
                position: index + 1, // Assuming position is a field in your project schema
            }));
            // Call the API to save the order (this is just an example, adapt to your API)
            await updateProjectOrder(updatedProjects);
            addToast('Project order saved successfully', 'success');
        } catch (error) {
            console.error("Error saving project order:", error);
            addToast('Error saving project order', 'error');
        }
    };


    return (
        <div className="projects-section">
            <div className="projects-header">
                <div>
                    <h2>Projects</h2>
                    <p>You can reorder projects by dragging and dropping them.</p>
                </div>
                <button onClick={() => setIsAddActive(true)} className="btn-action">
                    <Icon name="plus-circle" />
                    add new project
                </button>
            </div>

            <div className="projects">
                {projects ? (
                    projects
                        .map((project: IProject, index: number) => (
                            <div
                                key={project._id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, index)}
                            >
                                <Project project={project} />
                            </div>
                        ))
                ) : (
                    <p>No projects</p>
                )}
            </div>

            <button onClick={handleSaveOrder} className="btn-save-order btn-save">
                Save Order
            </button>

            {isAddActive && <CreateProject setIsAddActive={setIsAddActive} />}
        </div>
    );
}
