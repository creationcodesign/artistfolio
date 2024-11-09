import AboutMeSection from "../profile/about/AboutSection";

export default function AboutMe() {
    return (
        <div className="about-section section about-grid" id="about">
            <AboutMeSection />
            {/* 
                <div className="about-me about-grid-item-1">
                <h2 className="section-title">About Me</h2>
                 <p>Welcome to my creative world!</p>
                <p>
                    I'm Nikita, an audio-visual artist dedicated to crafting immersive experiences that blend the power of music and visual storytelling.
                </p>
                <p>My journey began at the crossroads of sound and sight, where I discovered the unique magic that happens when these two art forms unite.</p> 
                </div>
                */}

            <div className="about-journey about-grid-item-2">
                <h2 className="section-title">My Journey</h2>
                <p>
                    From an early age, I was captivated by the emotional depth that music and visuals could evoke.
                    I started as a musician, composing and  producing tracks that told stories through melodies and rhythms.
                </p>
                <p>As my  passion for visual arts grew, I began to explore how video could enhance  the narrative power of my music.</p>
                <p>
                    This led me to the world of  audio-visual art, where I found my true calling.
                </p>
            </div>
        </div>
    )
}
