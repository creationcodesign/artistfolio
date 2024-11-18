import { useEffect, useState } from "react"
import axios from 'axios';
import { IAbout } from "../interface/IAbout";

export default function useAboutSection() {
    const [aboutData, setAboutData] = useState<IAbout | null>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        axios.get('/api/about')
            .then(response => {
                setAboutData(response.data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(true)
                console.error('There was an error fetching the About Me content!', error);
            });
    }, []);

    return { aboutData, loading }
}
