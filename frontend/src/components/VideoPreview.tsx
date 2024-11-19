export default function VideoPreview({ setIsVideoActive, heroData }: any) {
    const closeVideo = () => setIsVideoActive(false);

    return (
        <div className="video-overlay">
            <div className="video-container">
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
    )
}
