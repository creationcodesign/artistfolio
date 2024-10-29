

export default function CreateProject() {
    return (
        <div className="project-action create-project">
            <h3>Create Project</h3>

            <form action="">
                <label htmlFor="project-title">
                    <span>project name</span>
                    <input type="text" name="project-title" id="project-title" />
                </label>
                <label htmlFor="project-description">
                    <span>project description</span>
                    <input type="text" name="project-description" id="project-description" />
                </label>
                <label htmlFor="project-link">
                    <span>project link</span>
                    <input type="text" name="project-link" id="project-link" />
                </label>
                <label htmlFor="project-thumbnail">
                    <span>project thumbnail</span>
                    <input type="text" name="project-thumbnail" id="project-thumbnail" />
                </label>
            </form>
        </div>
    )
}
