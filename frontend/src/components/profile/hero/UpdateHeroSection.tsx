import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteEditor from '../../NoteEditor';
import useHeroSection from '../../../hooks/useHeroSection';
import { useToast } from '../../../context/ToastContext';

export default function UpdateHeroSection() {
    const { addToast } = useToast();
    const { heroData } = useHeroSection();

    const [heroUpdate, setHeroUpdate] = useState({
        title: '',
        subtitle: '',
        text: '',
        imageUrl: '',
        link: '',
        projectTitle: '',
        buttonPrimary: '',
        buttonSecondary: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isFormChanged, setIsFormChanged] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (heroData) {
            setHeroUpdate({
                title: heroData.title || '',
                subtitle: heroData.subtitle || '',
                text: heroData.text || '',
                imageUrl: heroData.imageUrl || '',
                link: heroData.link || '',
                projectTitle: heroData.projectTitle || '',
                buttonPrimary: heroData.buttonPrimary || '',
                buttonSecondary: heroData.buttonSecondary || '',
            });
        }
    }, [heroData]);

    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setHeroUpdate((prevState) => {
            const updatedState = { ...prevState, [name]: value };
            setIsFormChanged(true);
            return updatedState;
        });
    };

    // Handle form submission 
    const handleUpdate = async () => {
        if (!isFormChanged) {
            addToast('No changes detected.', 'info');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await axios.put('/api/hero/update', heroUpdate, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            addToast('Hero Section updated successfully!', 'success');
            setHeroUpdate(response.data);
        } catch (error) {
            setError('Error updating Hero Section content.');
            console.error('Error updating Hero Section:', error);
        } finally {
            setLoading(false);
            setIsFormChanged(false);
        }
    };


    return (
        <div className='update-section'>
            <h2>Update Hero Section</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Updating...</p>}

            <form onSubmit={(e) => e.preventDefault()} className="flex-column hero-form">
                <div className='form-subsection'>
                    <label htmlFor="title">
                        Title
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={heroUpdate.title}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="subtitle">
                        Subtitle
                        <input
                            id="subtitle"
                            type="text"
                            name="subtitle"
                            value={heroUpdate.subtitle}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className='form-subsection form-selection-long'>
                    <label htmlFor="project-title">
                        Hero Project Title
                        <input
                            id="project-title"
                            type="text"
                            name="projectTitle"
                            value={heroUpdate.projectTitle}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="imageUrl">
                        Image URL
                        <input
                            id="imageUrl"
                            type="text"
                            name="imageUrl"
                            value={heroUpdate.imageUrl}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="link">
                        Link
                        <input
                            id="link"
                            type="text"
                            name="link"
                            value={heroUpdate.link}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='form-subsection'>
                    <label htmlFor="buttonPrimary">
                        Button Primary
                        <input
                            id="buttonPrimary"
                            type="text"
                            name="buttonPrimary"
                            value={heroUpdate.buttonPrimary}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="buttonSecondary">
                        Button Secondary
                        <input
                            id="buttonSecondary"
                            type="text"
                            name="buttonSecondary"
                            value={heroUpdate.buttonSecondary}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </form>

            <label htmlFor="description">
                Text
                <NoteEditor
                    name="text"
                    note={heroUpdate.text}
                    setNote={(value: string) => {
                        setHeroUpdate((prevState) => ({
                            ...prevState,
                            text: value,
                        }));
                        setIsFormChanged(true);
                    }}
                    id="description"
                    className="note-editor-hero"
                />
            </label>

            <button onClick={handleUpdate} disabled={loading || !isFormChanged} className='btn-save'>
                {loading ? 'Updating...' : 'Update Hero Section'}
            </button>
        </div >
    );
}
