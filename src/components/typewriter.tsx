import { useState, useEffect } from "react";

const useTypewriter = (text: string, speed: number = 75) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
interface TypewriterProps {
  text: string;
  speed?: number;
}
const Typewriter = ({ text, speed }: TypewriterProps) => {
  const displayText = useTypewriter(text, speed);

  return <span>{displayText}</span>;
};

export default Typewriter;
