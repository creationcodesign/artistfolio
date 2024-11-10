import { useEffect, useState } from "react"
import axios from 'axios';
import { ISkills } from "../interface/ISkills";

export default function useSkillsSection() {
    const [skillsData, setSkillsData] = useState<ISkills | null>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        axios.get('/api/skills')
            .then(response => {
                setSkillsData(response.data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(true)
                console.error('There was an error fetching the skills content!', error);
            });
    }, []);

    return { skillsData, loading }
}
