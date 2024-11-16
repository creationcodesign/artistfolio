import AboutMe from "../components/portfolio/AboutMe";
import PortfolioLayout from "../layout/PortfolioLayout";
import Hero from "../components/portfolio/Hero";
import SelectedWork from "../components/portfolio/SelectedWork";
import SkillsSection from "../components/profile/skills/SkillsSection";
import ContactSection from "../components/profile/contact/ContactSection";

export default function Home() {
    return (
        <PortfolioLayout>
            <div className='home-page'>
                <Hero />
                <SelectedWork />
                <AboutMe />
                <SkillsSection />
                <ContactSection />
            </div>
        </PortfolioLayout>
    )
}
