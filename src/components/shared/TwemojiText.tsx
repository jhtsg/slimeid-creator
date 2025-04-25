import React from 'react';
import twemoji from 'twemoji';

// Utility to convert emoji-laden strings to JSX with Twemoji images
const TwemojiText: React.FC<{ text: string }> = ({ text }) => {
  const parsed = twemoji.parse(text, {
    folder: 'svg',
    ext: '.svg',
    base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
  });

  // Create a temporary DOM element to parse the result
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = parsed;

  const elements: React.ReactNode[] = [];

  Array.from(tempDiv.childNodes).forEach((node, i) => {
    if (node.nodeType === Node.TEXT_NODE) {
      elements.push(node.textContent);
    } else if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLImageElement) {
      elements.push(
        <img
          key={i}
          src={node.src}
          alt={node.alt}
          style={{
            height: '1em',
            width: '1em',
            verticalAlign: 'middle',
          }}
        />
      );
    }
  });

  return <>{elements}</>;
};

export default TwemojiText;
