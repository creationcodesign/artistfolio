export interface IProject {
    _id: string | null;
    name: string;
    description: string;
    technologies: string[];
    link: string;
    thumbnail: string;
    position: number;
}

export interface IProjectCreate {
    name: string;
    description: string;
    technologies: string[];
    link: string;
    thumbnail: string;
}

export interface IProjectUpdate {
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
    createProject: (newProject: IProjectCreate) => Promise<{ success: boolean; message?: string }>;
    getProject: (id: string) => Promise<{ success: boolean; message?: string; data?: IProject }>;
    getProjects: () => Promise<{ success: boolean; message?: string; data?: IProject[] }>;
    updateProject: (id: string, updatedProject: IProject) => Promise<{ success: boolean; message?: string; data?: IProject }>;
    updateProjectsOrder: (projects: IProject[]) => Promise<{ success: boolean; message?: string }>;
    deleteProject: (id: string) => Promise<{ success: boolean; message?: string }>;
}
