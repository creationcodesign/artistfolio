import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/profile/Sidebar";
import Projects from "../../components/profile/project/Projects";
import UpdateAboutSection from "../../components/profile/about/UpdateAboutSection";
import UpdateSkills from "../../components/profile/skills/UpdateSkills";
import UpdateContactSection from "../../components/profile/contact/UpdateContactSection";


export default function Profile() {
    const [selectedAction, setSelectedAction] = useState('dashboard');
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };


    return (
        <div className='profile-page'>
            <div className="profile-header">
                <h1>Profile</h1>
                <button onClick={handleLogout} className="btn-action">
                    Logout
                </button>
            </div>

            <div className="profile-section profile-content">
                <Sidebar
                    selectedAction={selectedAction}
                    setSelectedAction={setSelectedAction}
                />

                <div className="profile-actions">
                    {
                        selectedAction === 'projects' && <Projects />
                        || selectedAction === 'about' && <UpdateAboutSection />
                        || selectedAction === 'skills' && <UpdateSkills />
                        || selectedAction === 'contact' && <UpdateContactSection />
                    }
                </div>
            </div>
        </div>
    )
}
