import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteEditor from '../../NoteEditor';
import useAboutSection from '../../../hooks/useAboutSection';
import { useToast } from '../../../context/ToastContext';

export default function UpdateAboutSection() {
    const { addToast } = useToast();
    const { aboutData, loading: aboutDataLoading } = useAboutSection(); // Get about data and its loading state

    const [aboutMe, setAboutMe] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isFormChanged, setIsFormChanged] = useState(false);

    const token = localStorage.getItem('token');

    // Sync aboutMe state with the fetched aboutData when it changes
    useEffect(() => {
        if (aboutData) {
            setAboutMe({
                title: aboutData.title || '',
                description: aboutData.description || '',
                imageUrl: aboutData.imageUrl || '',
            });
        }
    }, [aboutData]);

    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAboutMe((prevState) => {
            const updatedState = { ...prevState, [name]: value };
            setIsFormChanged(true);
            return updatedState;
        });
    };

    // Handle form submission (Update About Me)
    const handleUpdate = async () => {
        if (!isFormChanged) {
            addToast('No changes detected.', 'info');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await axios.put('/api/about/update', aboutMe, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include token in the header
                    'Content-Type': 'application/json',
                },
            });
            addToast('About Me updated successfully!', 'success');
            setAboutMe(response.data); // Update local state with the updated data
        } catch (error) {
            setError('Error updating About Me content.');
            console.error('Error updating About Me:', error);
        } finally {
            setLoading(false);
            setIsFormChanged(false); // Reset form changed flag after submission
        }
    };

    // Show a loading message if aboutData is still being fetched
    if (aboutDataLoading) {
        return <div>Loading About Me data...</div>;
    }

    return (
        <div>
            <h1>Update About Me</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Updating...</p>}

            <form onSubmit={(e) => e.preventDefault()} className="flex-column">
                <label htmlFor="title">
                    Title
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={aboutMe.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="imageUrl">
                    Image URL
                    <input
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        value={aboutMe.imageUrl}
                        onChange={handleChange}
                    />
                </label>
            </form>

            <label htmlFor="description">Description</label>
            <NoteEditor
                id="description"
                note={aboutMe.description}
                setNote={(value: string) => {
                    setAboutMe((prevState) => ({
                        ...prevState,
                        description: value,
                    }));
                    setIsFormChanged(true);
                }}
            />

            <button onClick={handleUpdate} disabled={loading || !isFormChanged}>
                {loading ? 'Updating...' : 'Update About Me'}
            </button>
        </div>
    );
}
