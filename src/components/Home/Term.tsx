import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { SquareTerminal, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CLI from '../Common/CLI';

const TerminalPopup = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isTerminalVisible, setIsTerminalVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 200 });
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
  }, [isTyping, fullText]);

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

  const [width, setWidth] = useState(window.innerWidth <= 768 ? window.innerWidth * 0.9 : window.innerWidth * 0.6);
  const [height, setHeight] = useState(window.innerHeight * 0.6);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth <= 768 ? window.innerWidth * 0.9 : window.innerWidth * 0.6);
      setHeight(window.innerHeight * 0.6);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    const terminalPopup = document.getElementById('terminal-popup');
    const terminalContent = document.getElementById('terminal-popup1');

    if (terminalPopup && terminalContent) {
      terminalPopup.classList.toggle('rounded-xl');
      terminalContent.classList.toggle('rounded-lg');
      terminalPopup.classList.toggle('fixed');
      terminalPopup.classList.toggle('inset-0');
      terminalPopup.classList.toggle('w-full');
      terminalPopup.classList.toggle('h-full');
      terminalPopup.classList.toggle('max-w-full');
      terminalPopup.classList.toggle('overflow-hidden');
      terminalPopup.classList.toggle('shadow-lg');
      terminalPopup.classList.toggle('z-50');
      terminalContent.classList.toggle('h-full');
      window.scrollTo(0, 0);

      let bgShade = document.getElementById('terminal-popup-bg-shade');
      if (!bgShade) {
        bgShade = document.createElement('div');
        bgShade.id = 'terminal-popup-bg-shade';
        bgShade.className = 'fixed inset-0 bg-black bg-opacity-50 z-40 hidden';
        document.body.appendChild(bgShade);
      }
      bgShade.classList.toggle('hidden');
    }
    setIsMaximized(!isMaximized);
    if (!isMaximized) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const closeTerminal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTerminalVisible(false);
    if (isMaximized) {
      toggleMaximize(e); // Ensure the terminal is restored to its original state before closing
    }
    setText('');
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        id="terminal-popup-btn"
        className={`fixed bg-white hover:bg-green-500 hover:text-white text-green-500 dark:bg-gray-800 rounded-full shadow-lg p-3 bottom-5 right-5 cursor-pointer backdrop-blur-md hover:scale-110 transition-transform duration-900 ease-in-out quicksand ${isTerminalVisible ? 'opacity-10' : 'opacity-100'}`}
        onClick={() => {
          setIsTerminalVisible(true);
          window.scrollTo(0, 0);
        }}
        style={{ zIndex: 1000 }}
      >
        <Terminal size={32} />
      </div>
      <Draggable
        handle=".terminal-header"
        disabled={!isTerminalVisible || isMaximized}
        position={isMaximized ? { x: 0, y: 0 } : position}
        onStop={(_, data) => setPosition({ x: data.x, y: data.y })}
        enableUserSelectHack={false}
        bounds="parent"
      >
        <div className={`relative group rounded-xl shadow-lg mb-3 backdrop-blur-md fade-in duration-75 z-20 ${isTerminalVisible ? 'opacity-100' : 'opacity-0'}`} id="terminal-popup">
          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-tl from-cyan-500 via-green-500 to-blue-800 transition-opacity duration-700 opacity-0 group-hover:opacity-100 group-hover:blur-2xl opacity-10:hover"
            id="terminal-popup-bg-shade"
          ></div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg backdrop-blur-lg opacity-90 border border-gray-200 dark:border-gray-700" id="terminal-popup1">
            <div className="flex items-center justify-between space-x-4 p-2 cursor-move">
              <div className="flex gap-2">
                <div
                  className="p-1.5 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer xs:p-2"
                  onClick={closeTerminal}
                ></div>
                <div
                  className="p-1.5 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer xs:p-2"
                  onClick={toggleMaximize}
                ></div>
                <div
                  className="p-1.5 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer xs:p-2"
                  onClick={closeTerminal}
                ></div>
              </div>
              <div className="rounded-full cursor-pointer terminal-header w-[100%] flex items-center justify-center transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-900 dark:hover:text-green-500 hover:bg-opacity-50 dark:hover:bg-opacity-50">
                Terminal
              </div>
              <SquareTerminal size={22} />
            </div>
            <div
              ref={textContainerRef}
              className="space-y-2 overflow-y-auto relative terminal-header text-green-600 dark:text-green-500 cursor-text bg-gray-100 dark:bg-gray-900 rounded-lg text-sm md:text-md"
              style={{ height: `${height - 80}px` }}
              id="terminal-popup-body"
            >
              <pre className="whitespace-pre-wrap break-words p-2 text-sm md:text-md" style={{ fontFamily: 'monospace', width: `${width - 40}px` }}>
                {text}
              </pre>
              <div className="flex items-center space-x-2 relative p-2">
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
                  className="w-full mt-2 p-2 bg-transparent outline-none cursor-text dark:hover:bg-gray-700 rounded-lg"
                  placeholder="$"
                />
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default TerminalPopup;