import AboutMe from "../components/portfolio/AboutMe";
import PortfolioLayout from "../layout/PortfolioLayout";
import Hero from "../components/portfolio/Hero";
import SelectedWork from "../components/portfolio/SelectedWork";
import Contact from "../components/portfolio/Contact";
import SkillsSection from "../components/profile/skills/SkillsSection";

export default function Home() {
    return (
        <PortfolioLayout>
            <div className='home-page'>
                <Hero />
                <SelectedWork />
                <AboutMe />
                <SkillsSection />
                <Contact />
            </div>
        </PortfolioLayout>
    )
}
