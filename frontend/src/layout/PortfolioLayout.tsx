import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutProps = {
    children?: ReactNode
}

export default function PortfolioLayout({ children }: LayoutProps) {
    return (
        <div className="layout-portfolio app_">
            <Header />
            <main className="layout-portfolio-main">
                {children}
            </main>
            <Footer />
        </div>
    )
}
