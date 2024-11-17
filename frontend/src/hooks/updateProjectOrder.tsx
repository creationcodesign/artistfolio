import axios from 'axios';
import { IProject } from "../interface/IProject";

export const updateProjectOrder = async (projects: IProject[]) => {
    try {
        const response = await axios.put('/api/projects', { projects });
        return response.data;
    } catch (error) {
        console.error("Error updating project order:", error);
        throw error;
    }
};
