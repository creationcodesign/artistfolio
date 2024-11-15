import { useEffect, useState } from "react"
import axios from 'axios';
import { IContact } from "../interface/IContact";

export default function useContactSection() {
    const [contactData, setContactData] = useState<IContact | null>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        axios.get('/api/contact')
            .then(response => {
                setContactData(response.data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(true)
                console.error('There was an error fetching the contact content!', error);
            });
    }, []);

    return { contactData, loading }
}
