import useContactSection from "../../../hooks/useContactSection";


export default function ContactSection() {
    const { contactData, loading } = useContactSection();

    if (!contactData || loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="contact-section section" id="contact">
            <h2 className="section-title">
                {contactData?.title || 'Get in Touch'}
            </h2>
            <div
                dangerouslySetInnerHTML={{ __html: contactData?.description }}
            />
            <button className="btn-primary">
                Contact Me
            </button>
        </div>
    )
}


{/* 
<p>
I'm always excited to connect with fellow creatives and audiences who  share a passion for audio-visual art.
</p>
<p>Whether you're interested in a collaboration, commissioning a project, or simply want to discuss the latest trends in audio-visual media, feel free to reach out.</p>
<p>Let's create something extraordinary together.</p> 
*/}