import { Icon } from "@ailibs/feather-react-ts";
import useHeroSection from "../../../hooks/useHeroSection";
import heroImg from '../../../assets/images/default-img-small.png';
import { useState } from "react";
import VideoPreview from "../../VideoPreview";


export default function HeroSection() {
    const [isVideoActive, setIsVideoActive] = useState(false)
    const { heroData, loading } = useHeroSection();

    if (!heroData || loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='hero-section section' id="hero">
            <div className='hero-content'>
                <h1 className="hero-title">
                    {heroData?.title || "Welcome to Nikita's Creations"}
                </h1>
                <h2 className="hero-subtitle">
                    The Fusion of Sound and Vision
                </h2>
                {heroData?.text?.length === 0 ?
                    <p className="hero-description">
                        Transforming imagination
                        <br />
                        into stunning digital art
                    </p>
                    :
                    <div
                        dangerouslySetInnerHTML={{ __html: heroData?.text }}
                        className="hero-description"
                    />}
                <div className="hero-buttons">
                    <button className='btn-primary'>
                        Explore My Work
                    </button>
                    <button className='btn-secondary'>
                        Get in Touch
                    </button>
                </div>
            </div>
            <div className='hero-image'>
                <img src={heroData?.imageUrl || heroImg}
                    alt="hero image demo reel"
                    width={420}
                />
                <div className='hero-image-action flex-row play-section' onClick={() => setIsVideoActive(true)} >
                    <h4>Demo Reel 2024</h4>
                    <Icon name="play" className="play-icon" />
                </div>
            </div>
            {/* Video */}
            {isVideoActive &&
                <VideoPreview
                    setIsVideoActive={setIsVideoActive}
                    heroData={heroData}
                />}
        </div>
    )
}
