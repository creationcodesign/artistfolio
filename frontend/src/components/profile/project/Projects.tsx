import { useState } from "react";
import { Icon } from "@ailibs/feather-react-ts";
import Project from "./Project";
import CreateProject from "./CreateProject";


export default function Projects() {
    const [projectAction, setProjectAction] = useState<string>('create')

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
                <Project setProjectAction={setProjectAction} />
                <Project setProjectAction={setProjectAction} />
            </div>


            {projectAction === 'create' &&
                <CreateProject />
            }

        </div>
    )
}
