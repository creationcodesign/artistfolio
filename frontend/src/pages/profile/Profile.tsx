import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import ProfileLayout from "../../layout/ProfileLayout";
import Sidebar from "../../components/profile/Sidebar";
import Projects from "../../components/profile/project/Projects";
import UpdateAboutSection from "../../components/profile/UpdateAboutSection";

export default function Profile() {
    const [selectedAction, setSelectedAction] = useState('dashboard');
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    console.log("selectedAction:", selectedAction)


    return (
        // <ProfileLayout>
        <div className='profile-page'>
            <h1>Profile</h1>

            <button onClick={handleLogout}>
                Logout
            </button>

            <Sidebar
                selectedAction={selectedAction}
                setSelectedAction={setSelectedAction}
            />

            {
                selectedAction === 'about' && <UpdateAboutSection />
                ||
                selectedAction === 'projects' && <Projects />
                // ||
                // selectedAction === 'settings' && <Settings />
                // ||
                // selectedAction === 'account' && <Account />
            }
        </div>
        // </ProfileLayout>
    )
}
