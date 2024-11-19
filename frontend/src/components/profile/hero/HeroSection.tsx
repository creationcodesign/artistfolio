import { Icon } from "@ailibs/feather-react-ts";
import useHeroSection from "../../../hooks/useHeroSection";
import heroImg from '../../../assets/images/default-img-small.png';
import { useState } from "react";
// import VideoPlayer from "../../VideoPlayer";


export default function HeroSection() {
    const [isVideoActive, setIsVideoActive] = useState(false)
    const { heroData, loading } = useHeroSection();

    if (!heroData || loading) {
        return <p>Loading...</p>;
    }

    console.log("heroData:", heroData.link)

    const closeVideo = () => setIsVideoActive(false);


    // const getGoogleDriveDirectLink = (url: string) => {
    //     const regex = /(?:drive|docs).google.com.*(?:id=|\/)([^\/?&]*)/i;
    //     const match = url.match(regex);
    //     return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : url;
    // };

    //     <video width="640" height="360" controls autoPlay>
    //     <source src={getGoogleDriveDirectLink(heroData?.link || '')} type="video/mp4" />
    //     Your browser does not support the video tag.
    // </video>


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


            {/* Video Overlay */}
            {isVideoActive && (
                // <video width="640" height="360" controls >
                //     <source src={heroData?.link || ''} type="video/mp4" />
                //     Your browser does not support the video tag.
                // </video>


                <div className="video-overlay">
                    <div className="video-container">
                        {/* Close Button */}
                        <button className="close-video-btn" onClick={closeVideo}>X</button>

                        {/* Check if video is from YouTube or direct URL */}
                        {heroData?.link?.includes('youtube.com') ? (
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${heroData.link.split('v=')[1]}`}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Demo Reel"
                            ></iframe>
                        ) : (
                            <video width="640" height="360" controls autoPlay>
                                <source src={heroData?.link || ''} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            )}

            {/* {isVideoActive &&
                <VideoPlayer videoSrc={heroData?.link} />
                } */}
        </div>
    )
}
