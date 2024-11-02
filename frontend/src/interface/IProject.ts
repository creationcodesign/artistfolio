export interface IProject {
    _id: string | null;
    name: string;
    description: string;
    technologies: string[];
    link: string;
    thumbnail: string;
}

export interface ProjectStore {
    projects: IProject[];
    setProjects: (projects: IProject[]) => void;
    createProject: (newProject: IProject) => Promise<{ success: boolean; message?: string }>;
    getProject: (id: string) => Promise<{ success: boolean; message?: string; data?: IProject }>;
    getProjects: () => Promise<{ success: boolean; message?: string; data?: IProject[] }>;
    updateProject: (id: string, updatedProject: IProject) => Promise<{ success: boolean; message?: string; data?: IProject }>;
    deleteProject: (id: string) => Promise<{ success: boolean; message?: string }>;
}
