import { useState } from "react";
import Sidebar from "../../components/profile/Sidebar";
import About from "../About";
import Projects from "../../components/profile/project/Projects";

export default function Profile() {
    // const actions = ['dashboard', 'projects', 'about', 'settings', 'account'];
    const [selectedAction, setSelectedAction] = useState('dashboard');

    return (
        <div className='profile-page'>
            <h1>Profile</h1>

            <Sidebar
                selectedAction={selectedAction}
                setSelectedAction={setSelectedAction}
            />

            {selectedAction === 'dashboard' && <About />
                ||
                selectedAction === 'projects' && <Projects />
                // ||
                // selectedAction === 'settings' && <Settings />
                // ||
                // selectedAction === 'account' && <Account />
            }
        </div>
    )
}
