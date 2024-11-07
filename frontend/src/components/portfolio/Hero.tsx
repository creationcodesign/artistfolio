import { Icon } from '@ailibs/feather-react-ts'
import heroImg from '../../assets/images/default-img-small.png'

export default function Hero() {
    return (
        <div className='hero-section section' id="hero">
            <div className='hero-content'>
                <h1 className="hero-title">Welcome to Nikita's Creations</h1>
                <h2 className="hero-subtitle">The Fusion of Sound and Vision</h2>
                <p className="hero-description">
                    Transforming imagination
                    <br />
                    into stunning digital art
                </p>
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
                <img src={heroImg} alt="hero image demo reel" width={420} />
                <div className='hero-image-action flex-row'>
                    <h4>Demo Reel 2024</h4>
                    <Icon name="play" />
                </div>
            </div>
        </div>
    )
}
