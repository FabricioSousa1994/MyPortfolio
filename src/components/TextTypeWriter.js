import { useState, useEffect } from 'react';

function TextTypeWriter() {
  const [text, setText] = useState('');
  const sentence = "Welcome to my portfolio! My main concern is building responsive and intuitive websites and applications. Click on the button that will appear to know more about me and my projects!"; 
  

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex === sentence.length) {
        clearInterval(intervalId);
      } else {
        setText(sentence.slice(0, currentIndex + 1));
        currentIndex++;
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div>{text}</div>
  );
}

export default TextTypeWriter;