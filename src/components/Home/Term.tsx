import React, { useEffect, useState, useRef } from 'react';
import { SquareTerminal } from 'lucide-react';

const TerminalPopup = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
//   @ts-ignore
  const [isTyping, setIsTyping] = useState(false); 
  const textContainerRef = useRef<HTMLDivElement>(null); // Ref for scrolling container

  const fullText = `  Hello, World!
I'm a full-stack developer with a passion for creating web applications. If you have a project you'd like to discuss, feel free to reach out.
You can contact me at:
- Email:
- LinkedIn:
- GitHub:\n`;

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTyping(false); // Stop typing effect
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to the bottom whenever the text changes
  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTop = textContainerRef.current.scrollHeight;
    }
  }, [text]);

  // Handle user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setText((prevText) => prevText + `\n> ${userInput}`); // Append user input
      handleCommand(userInput); // Execute the command
      setUserInput(''); // Clear input after submission
    }
  };

  // Command handler function
  const handleCommand = (input: string) => {
    if (input === 'help') {
      setText((prevText) => prevText + `\nAvailable commands: help, about, clear`);
    } else if (input === 'about') {
      setText((prevText) => prevText + `\nI'm a full-stack developer working on various web technologies.`);
    } else if (input === 'clear') {
      setText(''); // Clear terminal output
    } else {
      setText((prevText) => prevText + `\nCommand not recognized. Type 'help' for available commands.`);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-black text-white dark:bg-gray-800 rounded-lg shadow-lg p-3 backdrop-blur-md transition-all duration-300">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer transform transition-all duration-300 ease-in-out"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer transform transition-all duration-300 ease-in-out"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer transform transition-all duration-300 ease-in-out"></div>
        </div>
        <SquareTerminal size={22} />
      </div>

      {/* Terminal Body with Scrollable Text */}
      <div 
        ref={textContainerRef} // Attach the ref here
        className="mt-4 space-y-2 max-h-96 overflow-y-auto relative"
        style={{ height: '400px' }}
      >
        <pre className="text-lg whitespace-pre-wrap">
          {text}
        </pre>

        {/* User Input */}
        <div className="flex items-center space-x-2 relative">
            <p className="text-green-500">
                <span className="text-green-300 pr-2">λ</span>
                <span className="text-yellow-500">guest</span>
                <span className="text-blue-500">@</span>
                <span className="text-teal-400">rubenlopes.uk</span>
                <span className="text-white text-lg pl-2 pr-1">{"►"}</span>
            </p>

          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full mt-2 p-2 bg-transparent text-white outline-none cursor-text cursor-color-green-500"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalPopup;
