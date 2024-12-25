import React from 'react';

interface LineBreak {
    type: 'lineBreak';
}

interface Video {
    type: 'video';
    title: string;
    src: string; // Link
}

interface MiscComponentProps {
    component: LineBreak | Video;
    type: 'lineBreak' | 'video';
    index: number;
}

const MiscComponent: React.FC<MiscComponentProps> = ({ component, type, index }) => {
    switch (type) {
        case 'lineBreak':
            return <hr key={index} className="border-black" />;
        case 'video':
            const curVideo = component as Video;
            return <div key={index}>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">{curVideo.title}</h2>
                <iframe
                    className="w-full aspect-video"
                    src={curVideo.src}
                    title={curVideo.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>;
        default:
            return null;
    }
}

export default MiscComponent;