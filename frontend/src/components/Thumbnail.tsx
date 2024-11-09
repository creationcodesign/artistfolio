import React from 'react'
import defaultImg from '../assets/images/default-img-small.png'

export const Thumbnail: React.FC<{ thumbnail: string }> = ({ thumbnail }) => {
    const isValidBase64 = (data: string) => {
        return data.startsWith('data:image/') && data.includes(';base64,');
    };

    const imageSrc = isValidBase64(thumbnail) ? thumbnail : defaultImg;
    console.log("imageSrc:", imageSrc)

    return (
        <img
            src={imageSrc}
            alt={imageSrc === defaultImg ? 'Default Thumbnail' : 'Project Thumbnail'}
            onError={(e) => { e.currentTarget.src = defaultImg; }} // Fallback on image error
            loading="lazy" // Lazy loading
            style={{ width: '100%', height: 'auto' }}
        />
    )
}
