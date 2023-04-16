import { useState, useEffect } from 'react';

function TypeWriter() {
  const [text, setText] = useState('');
  const sentence = "HI! I AM FABRÍCIO SOUSA, FULLSTACK WEB DEVELOPER"; 
  const delay = 120; 

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex === sentence.length) {
        clearInterval(intervalId);
      } else {
        setText(sentence.slice(0, currentIndex + 1));
        currentIndex++;
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div>{text}</div>
  );
}

export default TypeWriter;
