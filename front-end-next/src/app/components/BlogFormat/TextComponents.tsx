import React from 'react';

interface Text {
    type: 'text';
    textType: 'h1' | 'h2' | 'h3' | 'p';
    content: string;
}

interface BlockQuote {
    type: 'blockquote';
    content: string;
    author?: string;
}

interface BulletPoint {
    type: 'bulletPoint';
    title?: string;
    content: string;
}

interface List {
    type: 'list';
    listType: 'numbered' | 'bulleted';
    listTitle?: string;
    content: BulletPoint[];
}

interface TextComponentProps {
    text: Text | BlockQuote | List;
    type: 'text' | 'blockquote' | 'list';
    index?: number;
}

const TextComponent: React.FC<TextComponentProps> = ({ text, type, index }) => {
    switch (type) {
        case 'text':
            const curText = text as Text;
            switch (curText.textType) {
                case 'h1':
                    return <h1 key={index} className="text-4xl font-bold my-4 text-black">{curText.content}</h1>;
                case 'h2':
                    return <h2 key={index} className="text-2xl font-semibold my-4 text-black">{curText.content}</h2>;
                case 'h3':
                    return <h3 key={index} className="text-xl font-semibold my-2 text-black">{curText.content}</h3>;
                case 'p':
                    return <p key={index} className="my-2 text-black">{curText.content}</p>;
                default: return null;
            }
        case 'blockquote':
            const curBlockQuote = text as BlockQuote;
            if (curBlockQuote.author) {
                return <div key={index}>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-6 mb-3 text-black">{curBlockQuote.content}</blockquote>
                            <p className="font-bold text-black pl-4">{'— ' + curBlockQuote.author}</p>
                        </div>;
            } else {
                return <div key={index}>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-6 mb-3 text-black">{curBlockQuote.content}</blockquote>
                </div>;
            }
        case 'list':
            const curList = text as List;
            switch (curList.listType) {
                case 'numbered':
                    return <ol key={index} className="list-decimal list-inside mb-6 text-black">
                        {curList.content.map((item, subIndex) => {
                            if (item.title) {
                                return <li key={`${index}-${subIndex}`}>{item.title}{item.content}</li>
                            }
                            else {
                                return <li key={`${index}-${subIndex}`}>{item.content}</li>
                            }
                        })}
                    </ol>;
                case 'bulleted':
                    return <ul key={index} className="list-disc list-inside mb-6 text-black">
                        {curList.content.map((item, subIndex) => {
                            if (item.title) {
                                return <li key={`${index}-${subIndex}`}>{item.title}{item.content}</li>
                            }
                            else {
                                return <li key={`${index}-${subIndex}`}>{item.content}</li>
                            }
                        })}
                    </ul>;
                default: return null;
            }
        default: return null;
    }
}


export default TextComponent;