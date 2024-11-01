import { create } from 'zustand'
import { Project, ProjectStore } from '../interface/Project';

export const useProjectStore = create<ProjectStore>((set) => ({
    projects: [],
    setProjects: (projects) => set({ projects }),
    createProject: async (newProject: Project) => {
        if (!newProject.name || !newProject.link || !newProject.thumbnail) {
            return {
                success: false,
                message: 'please provide all fields'
            }
        }

        const res = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProject)
        })

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Error creating project:', errorData);
            return {
                success: false,
                message: errorData.message || 'Failed to create project',
            };
        }

        const data = await res.json()
        if (data.success) {
            set((state: any) => ({
                projects: [...state.projects, data.data]
            }))
            return {
                success: true,
                message: 'Project created',
                data: data.data
            }
        } else {
            return {
                success: false,
                message: data.message
            }
        }
    }
}))
