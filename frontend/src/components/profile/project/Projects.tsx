import { useEffect, useState } from "react";
import { Icon } from "@ailibs/feather-react-ts";
import Project from "./Project";
import CreateProject from "./CreateProject";
import { useProjectStore } from "../../../store/project";


export default function Projects() {
    const [projectAction, setProjectAction] = useState<string>('create')
    const { getProjects, projects } = useProjectStore()

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    return (
        <div className="projects-section">
            <div className="projects-header">
                <h2>Projects</h2>
                <button onClick={() => setProjectAction('create')} className="btn-action">
                    <Icon name="plus-circle" />
                    add new project
                </button>
            </div>

            <div className="projects">
                {
                    projects ? projects.map((project: any) => (
                        <Project key={project._id} setProjectAction={setProjectAction} project={project} />
                    ))
                        : <p>No projects</p>
                }
            </div>

            {projectAction === 'create' &&
                <CreateProject />
            }

        </div>
    )
}
