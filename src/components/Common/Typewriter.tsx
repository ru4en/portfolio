import { useEffect, useState } from 'react';

interface TypewriterProps {
  fullText: string;
  typingSpeed?: number; // Optional prop to control the typing speed
}

const Typewriter = ({ fullText, typingSpeed = 50 }: TypewriterProps) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length && isTyping) {
        index++;
        setText((prevText) => `${prevText}${fullText[index - 1]}`);
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [isTyping, fullText, typingSpeed]);

  return <>{text}</>;
};

export default Typewriter;
