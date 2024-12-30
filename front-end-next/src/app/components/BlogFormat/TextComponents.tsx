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
                    return <h3 key={index} className="text-xl font-semibold my-4 text-black">{curText.content}</h3>;
                case 'p':
                    return <p key={index} className="leading-[30px] my-4 text-black">{curText.content}</p>;
                default: return null;
            }
        case 'blockquote':
            const curBlockQuote = text as BlockQuote;
            if (curBlockQuote.author) {
                return <div key={index} className="my-4">
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-black mb-2">{curBlockQuote.content}</blockquote>
                    <p className="font-bold text-black pl-4">{'— ' + curBlockQuote.author}</p>
                </div>;
            } else {
                return <div key={index} className="my-4">
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-black">{curBlockQuote.content}</blockquote>
                </div>;
            }
        case 'list':
            const curList = text as List;
            switch (curList.listType) {
                case 'numbered':
                    return <div key={index} className="text-black my-4 relative z-0 pointer-events-none">
                        {curList.listTitle && <h3 className="font-semibold mb-2">{curList.listTitle}</h3>}
                        <ol className="list-decimal list-outside relative ml-0 pl-5 font-semibold space-y-2 pointer-events-none">
                            {curList.content.map((item, subIndex) => {
                                if (item.title) {
                                    return <li key={`${index}-${subIndex}`}>
                                        <span className="pointer-events-auto">
                                            <strong className='font-semibold'>{item.title}</strong>
                                            <span className='font-normal'>{item.content}</span>
                                        </span>
                                    </li>
                                }
                                else {
                                    return <li key={`${index}-${subIndex}`}>
                                        <span className="pointer-events-auto font-normal">{item.content}</span>
                                    </li>
                                }
                            })}
                        </ol>
                    </div>;
                case 'bulleted':
                    return <div key={index} className="text-black my-4 relative z-0  pointer-events-none">
                        {curList.listTitle && <h3 className="font-semibold mb-2">{curList.listTitle}</h3>}
                        <ul className="text-black list-disc list-outside relative ml-0 left-5 font-semibold space-y-2 pointer-events-none">
                            {curList.content.map((item, subIndex) => {
                                if (item.title) {
                                    return <li key={`${index}-${subIndex}`}>
                                        <span className="pointer-events-auto">
                                            <strong className='font-semibold'>{item.title}</strong>
                                            <span className='font-normal'>{item.content}</span>
                                        </span>
                                    </li>
                                }
                                else {
                                    return <li key={`${index}-${subIndex}`}>
                                        <span className="pointer-events-auto font-normal">{item.content}</span>
                                    </li>
                                }
                            })}
                        </ul>
                    </div>;
                default: return null;
            }
        default: return null;
    }
}


export default TextComponent;