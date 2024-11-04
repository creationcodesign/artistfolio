import { useEffect, useState } from "react";
import { Icon } from "@ailibs/feather-react-ts";
import Project from "./Project";
import CreateProject from "./CreateProject";
import { useProjectStore } from "../../../store/project";
import { IProject } from "../../../interface/IProject";


export default function Projects() {
    const [isAddActive, setIsAddActive] = useState<boolean>(false)
    const { getProjects, projects } = useProjectStore()

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    return (
        <div className="projects-section">
            <div className="projects-header">
                <h2>Projects</h2>
                <button onClick={() => setIsAddActive(true)} className="btn-action">
                    <Icon name="plus-circle" />
                    add new project
                </button>
            </div>

            <div className="projects">
                {
                    projects ? projects.map((project: IProject) =>
                        <Project key={project._id} project={project} />
                    )
                        : <p>No projects</p>
                }
            </div>

            {isAddActive &&
                <CreateProject setIsAddActive={setIsAddActive} />
            }

        </div>
    )
}
