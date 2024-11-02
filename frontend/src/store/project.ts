import { create } from 'zustand'
import { IProject, ProjectStore } from '../interface/IProject';

export const useProjectStore = create<ProjectStore>((set) => ({
    projects: [],
    // set projects
    setProjects: (projects) => set({ projects }),

    // create project
    createProject: async (newProject: IProject) => {
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
    },

    // get all projects
    getProjects: async () => {
        const res = await fetch('/api/projects')
        const data = await res.json()
        if (data.success) {
            set({ projects: data.data })
            return {
                success: true,
                data: data.data
            }
        } else {
            return {
                success: false,
                message: data.message
            }
        }
    },

    // get one project
    getProject: async (id: string) => {
        const res = await fetch(`/api/projects/${id}`)
        const data = await res.json()
        if (data.success) {
            return {
                success: true,
                data: data.data
            }
        } else {
            return {
                success: false,
                message: data.message
            }
        }
    },

    // update project
    updateProject: async (id: string, updatedProject: IProject) => {
        const res = await fetch(`/api/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProject)
        })
        const data = await res.json()
        if (data.success) {
            set((state: any) => ({
                projects: state.projects.map((project: IProject) => {
                    if (project._id === id) {
                        return data.data
                    }
                    return project
                })
            }))
            return {
                success: true,
                message: 'Project updated',
                data: data.data
            }
        } else {
            return {
                success: false,
                message: data.message
            }
        }
    },

    // delete project
    deleteProject: async (id: string) => {
        const res = await fetch(`/api/projects/${id}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (!data.success) {
            return {
                success: false,
                message: data.message
            }
        }

        set((state: any) => ({
            projects: state.projects.filter((project: IProject) => project._id !== id)
        }))

        return {
            success: true,
            message: 'Project deleted'
        }

        // if (data.success) {
        //     set((state: any) => ({
        //         projects: state.projects.filter((project: IProject) => project._id !== id)
        //     }))
        //     return {
        //         success: true,
        //         message: 'Project deleted'
        //     }
        // } else {
        //     return {
        //         success: false,
        //         message: data.message
        //     }
        // }
    }
}))
