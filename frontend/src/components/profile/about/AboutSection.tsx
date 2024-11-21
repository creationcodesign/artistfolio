import useAboutSection from '../../../hooks/useAboutSection';

const AboutMeSection = () => {
    const { aboutData, loading } = useAboutSection();

    if (!aboutData || loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="about-me about-grid-item-1">
            <h2 className="section-title">{aboutData?.title}</h2>
            <div
                dangerouslySetInnerHTML={{ __html: aboutData?.description }}
            />
            {/* {aboutData?.imageUrl && <img src={aboutData?.imageUrl} alt="About Me" />} */}
        </div>
    );
};

export default AboutMeSection;
