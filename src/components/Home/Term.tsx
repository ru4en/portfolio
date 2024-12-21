import React, { useState, useRef, useEffect } from 'react';
import { SquareTerminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CLI from '../Common/CLI';

const TerminalPopup = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const fullText = `
  This is an interactive terminal.\n
  Type 'help' for a list of available commands.
  \n`;

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
    }, 50);

    return () => clearInterval(interval);
  }, [isTyping]);

  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.scrollTop = textContainerRef.current.scrollHeight;
    }
  }, [text]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsTyping(false);
      handleCommand(userInput);
      setUserInput('');
    }
  };

  const handleCommand = (input: string) => {
    if (input === 'clear') {
      setText('');
      return;
    }
    setText((prevText) => prevText + `> ${input}\n`);
    setTimeout(() => {
      setText((prevText) => prevText + CLI(input.trim().toLowerCase(), navigate));
    }, 0);
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth <= 768 ? window.innerWidth * 0.9 : window.innerWidth * 0.6);
      setHeight(window.innerHeight * 0.6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
          {/* Terminal Icon */}
          <div
          className="
            fixed
            bottom-5
            right-5
            bg-gray-400
            dark:bg-gray-800
            rounded-full
            shadow-lg
            p-3
            cursor-pointer
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            transform
            hover:rotate-12
            dark:hover:bg-gray-700
            dark:hover:text-gray-200
            z-50
            {isPopupVisible ? 'hidden' : 'block'}
          "
          onClick={() => setIsPopupVisible(!isPopupVisible)}
        >
          <SquareTerminal size={32} />
        </div>
    <div className="relative group rounded-xl shadow-lg mb-3 p-5:hover backdrop-blur-md transition-all duration-300 mx-5 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80 transform transition-transform duration-500 ease-in-out">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-cyan-500 via-green-500 to-blue-800 
          opacity-0 group-hover:opacity-100 group-hover:blur-2xl opacity-10:hover
          transition-all duration-500 ease-in-out"></div>

      {/* Terminal Popup */}
      {isPopupVisible && (
        <div className="bg-gray-400 dark:bg-gray-800 rounded-xl terminal-popup transform transition-transform duration-500 
        fade-in ease-in-out fade-out">
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 backdrop-blur-lg transition-all duration-300 opacity-90"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex space-x-2">
                <div
                  className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer"
                  onClick={() => setIsPopupVisible(false)}
                ></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer"
                  onClick={() => console.log('Minimise button clicked')}
                ></div>
                <div
                  className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer"
                  onClick={() => console.log('Expand button clicked')}
                ></div>
              </div>
              <SquareTerminal size={22} />
            </div>

            {/* Terminal Body */}
            <div
              ref={textContainerRef}
              className="mt-4 space-y-2 overflow-y-auto relative text-green-600 dark:text-green-500"
              style={{ height: `${height - 80}px` }}
            >
              <pre
                className="text-lg whitespace-pre-wrap break-words"
                style={{ fontFamily: 'monospace', width: `${width - 40}px` }}
              >
                {text}
              </pre>

              {/* User Input */}
              <div className="flex items-center space-x-2 relative">
                <p className="text-green-500 pt-2">
                  <span className="text-green-300 pr-2">λ</span>
                  <span className="text-yellow-500">guest</span>
                  <span className="text-blue-500">@</span>
                  <span className="text-teal-400">rubenlopes.uk</span>
                  <span className="dark:text-white text-lg pl-2 pr-1">{"►"}</span>
                </p>

                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  className="w-full mt-2 p-2 bg-transparent outline-none cursor-text dark:hover:bg-gray-700 transition duration-300 rounded-lg"
                  placeholder="$"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default TerminalPopup;
