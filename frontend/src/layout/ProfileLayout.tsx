import { ReactNode } from "react";
import Sidebar from "../components/profile/Sidebar";

type LayoutProps = {
    children?: ReactNode
}

export default function ProfileLayout({ children }: LayoutProps) {
    return (
        <div className="layout-profile">
            <div className="layout-profile-content">
                <Sidebar />
                <main className="layout-profile-main">
                    {children}
                </main>
            </div>
        </div>
    )
}
