import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteEditor from '../../NoteEditor';
import { useToast } from '../../../context/ToastContext';
import useContactSection from '../../../hooks/useContactSection';

export default function UpdateContactSection() {
    const { addToast } = useToast();
    const { contactData } = useContactSection();
    // const { contactData, loading: contactDataLoading } = useContactSection();

    const [contactSection, setContactSection] = useState({
        title: '',
        description: '',
        imageUrl: '',
        buttonText: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isFormChanged, setIsFormChanged] = useState(false);

    const token = localStorage.getItem('token');

    // Sync contactSection state with the fetched aboutData when it changes
    useEffect(() => {
        if (contactData) {
            setContactSection({
                title: contactData.title || '',
                description: contactData.description || '',
                imageUrl: contactData.imageUrl || '',
                buttonText: contactData.buttonText || '',
            });
        }
    }, [contactData]);

    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactSection((prevState) => {
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
            const response = await axios.put('/api/contact/update', contactSection, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include token in the header
                    'Content-Type': 'application/json',
                },
            });
            addToast('contact data updated successfully!', 'success');
            setContactSection(response.data); // Update local state with the updated data
        } catch (error) {
            setError('Error updating contact content.');
            console.error('Error updating contact:', error);
        } finally {
            setLoading(false);
            setIsFormChanged(false); // Reset form changed flag after submission
        }
    };

    // Show a loading message if aboutData is still being fetched
    // if (contactDataLoading) {
    //     return <div>Loading Contact data...</div>;
    // }

    return (
        <div className='update-section'>
            <h2>Update Contact</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Updating...</p>}

            <form onSubmit={(e) => e.preventDefault()} className="flex-row">
                <label htmlFor="title">
                    Title
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={contactSection.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="button">
                    Button Text
                    <input
                        id="button"
                        type="text"
                        name="buttonText"
                        value={contactSection.buttonText}
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
                        value={contactSection.imageUrl}
                        onChange={handleChange}
                    />
                </label>
            </form>

            <label htmlFor="description">
                Text
                <NoteEditor
                    id="description"
                    note={contactSection.description}
                    setNote={(value: string) => {
                        setContactSection((prevState) => ({
                            ...prevState,
                            description: value,
                        }));
                        setIsFormChanged(true);
                    }}
                />
            </label>

            <button onClick={handleUpdate} disabled={loading || !isFormChanged} className='btn-save'>
                {loading ? 'Updating...' : 'Update About Me'}
            </button>
        </div>
    );
}
