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
            return <hr key={index} className="border-gray-500 my-4 mx-[1vw] border-t-[2px] opacity-[0.50]" />;
        case 'video':
            const curVideo = component as Video;
            return <div key={index}>
                <h2 className="text-2xl font-semibold mt-8 my-4 text-black">{curVideo.title}</h2>
                <iframe 
                    src={curVideo.src}
                    title="YouTube video player"
                    width="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full aspect-video rounded-2xl"
                >
                </iframe>
            </div>;
        default:
            return null;
    }
}

export default MiscComponent;