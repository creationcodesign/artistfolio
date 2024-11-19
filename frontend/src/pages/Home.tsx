import AboutMe from "../components/portfolio/AboutMe";
import PortfolioLayout from "../layout/PortfolioLayout";
import Hero from "../components/portfolio/Hero";
import SelectedWork from "../components/portfolio/SelectedWork";
import SkillsSection from "../components/profile/skills/SkillsSection";
import ContactSection from "../components/profile/contact/ContactSection";
import useHeroSection from "../hooks/useHeroSection";
import HeroSection from "../components/profile/hero/HeroSection";

export default function Home() {
    const { heroData } = useHeroSection();

    return (
        <PortfolioLayout>
            <div className='home-page'>
                {heroData?._id !== null ? <HeroSection /> : <Hero />}
                <SelectedWork />
                <AboutMe />
                <SkillsSection />
                <ContactSection />
            </div>
        </PortfolioLayout>
    )
}
