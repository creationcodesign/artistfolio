import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteEditor from '../../NoteEditor';

import { useToast } from '../../../context/ToastContext';
import useSkillsSection from '../../../hooks/useSkillsSection';


export default function UpdateSkills() {
    const { addToast } = useToast();
    const { skillsData, loading: skillsDataLoading } = useSkillsSection();

    const [skills, setSkills] = useState({
        title: '',
        text: '',
        skills: [''],
    });

    const [loading, setLoading] = useState(false);
    const [isFormChanged, setIsFormChanged] = useState(false);

    const token = localStorage.getItem('token');

    // Sync skills state with the fetched aboutData when it changes
    useEffect(() => {
        if (skillsData) {
            setSkills({
                title: skillsData.title || '',
                text: skillsData.text || '',
                skills: skillsData.skills || [''],
            });
        }
    }, [skillsData]);

    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSkills((prevState) => {
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
        try {
            const response = await axios.put('/api/skills/update', skills, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            addToast('Skills updated successfully!', 'success');
            setSkills(response.data);
        } catch (error) {
            addToast('Error updating Skills content.', 'error');
            console.error('Error updating Skills:', error);
        } finally {
            setLoading(false);
            setIsFormChanged(false);
        }
    };


    if (skillsDataLoading) {
        return <div>Loading Skills data...</div>;
    }


    return (
        <div className='update-section'>
            <h2>Update Skills</h2>

            {loading && <p>Updating...</p>}

            <form onSubmit={(e) => e.preventDefault()} className="flex-column">
                <label htmlFor="title">
                    Title
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={skills.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="skills-tools">
                    Skills
                    <textarea
                        id="skills-tools"
                        name="skills"
                        value={skills.skills}
                        onChange={(e) => {
                            setSkills((prevState) => ({
                                ...prevState,
                                skills: e.target.value.split(','),
                            }));
                            setIsFormChanged(true);
                        }}
                        // onChange={handleChange}
                        cols={30}
                        rows={5}
                    />
                </label>
            </form>

            <label htmlFor="text">
                Text
                <NoteEditor
                    note={skills.text}
                    setNote={(value: string) => {
                        setSkills((prevState) => ({
                            ...prevState,
                            text: value,
                        }));
                        setIsFormChanged(true);
                    }}
                />
            </label>

            <button onClick={handleUpdate} disabled={loading || !isFormChanged} className='btn-save'>
                {loading ? 'Updating...' : 'Update Skills'}
            </button>
        </div>
    )
}