import AboutMe from "../components/portfolio/AboutMe";
import PortfolioLayout from "../layout/PortfolioLayout";
import Hero from "../components/portfolio/Hero";
import SelectedWork from "../components/portfolio/SelectedWork";
import Skills from "../components/portfolio/Skills";
import Contact from "../components/portfolio/Contact";

export default function Home() {
    return (
        <PortfolioLayout>
            <div className='home-page'>
                <Hero />
                <SelectedWork />
                <AboutMe />
                <Skills />
                <Contact />
            </div>
        </PortfolioLayout>
    )
}
