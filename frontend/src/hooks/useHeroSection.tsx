import { useEffect, useState } from "react"
import axios from 'axios';
import { IHero } from "../interface/IHero";

export default function useHeroSection() {
    const [heroData, setHeroData] = useState<IHero | null>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        axios.get('/api/hero')
            .then(response => {
                setHeroData(response.data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(true)
                console.error('There was an error fetching the Hero content!', error);
            });
    }, []);

    return { heroData, loading }
}
