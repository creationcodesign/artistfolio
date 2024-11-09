import { useEffect } from "react";
import { useProjectStore } from "../../store/project";
import { IProject } from "../../interface/IProject";
import SelectedWorkCard from "./SelectedWorkCard";

export default function SelectedWork() {
    const { getProjects, projects } = useProjectStore()

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    return (
        <div className="selected-work-section projects-section" id="selected-work">
            <h2 className="section-title">Selected Work</h2>
            <div className="projects">
                {
                    projects ? projects.map((project: IProject) =>
                        <SelectedWorkCard key={project._id} project={project} />
                    )
                        : <p>No projects</p>
                }
            </div>
        </div>
    )
}
