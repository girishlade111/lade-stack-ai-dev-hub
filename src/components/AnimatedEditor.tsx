import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code2, Sparkles } from 'lucide-react';

interface AnimatedEditorProps {
  theme: string;
}

const AnimatedEditor: React.FC<AnimatedEditorProps> = ({ theme }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [suggestions, setSuggestions] = useState<Array<{text: string, type: string}>>([]);

  const codeLines = [
    'function createButton() {',
    '  return \'<button onclick="alert()">Click</button>\';',
    '}'
  ];

  const enhancedCodeLines = [
    'function createButton() {',
    '  const button = document.createElement(\'button\');',
    '  button.textContent = \'Click me\';',
    '  button.className = \'btn-primary\';',
    '  button.setAttribute(\'aria-label\', \'Primary action\');',
    '  ',
    '  button.addEventListener(\'click\', (event) => {',
    '    event.preventDefault();',
    '    handleClick();',
    '  });',
    '  ',
    '  return button;',
    '}'
  ];

  const aiSuggestions = [
    { text: "Add accessibility attributes", type: "accessibility" },
    { text: "Use semantic HTML structure", type: "semantic" },
    { text: "Implement proper event handling", type: "security" },
    { text: "Separate concerns (no inline handlers)", type: "best-practice" },
    { text: "Enhanced security and maintainability", type: "performance" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        setCurrentLine((prev) => {
          const nextLine = prev + 1;
          if (nextLine < codeLines.length) {
            setDisplayedText(prev => prev + codeLines[prev] + '\n');
            return nextLine;
          } else {
            setIsTyping(false);
            // Start showing AI suggestions
            setTimeout(() => {
              setSuggestions(aiSuggestions);
            }, 500);
            return prev;
          }
        });
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Glassmorphism Editor Window */}
      <div className="glassmorphism rounded-2xl overflow-hidden shadow-2xl">
        {/* Editor Header */}
        <div className="bg-gray-50/50 dark:bg-gray-800/50 px-6 py-4 border-b border-white/20 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                code.ladestack.in
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              AI Active
            </div>
          </div>
        </div>
        
        {/* Editor Content */}
        <div className="p-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Code Input */}
            <div className="space-y-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Your Code (Input)
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm text-green-400 min-h-[200px] relative">
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-green-400 ml-1"
                  />
                )}
                <pre className="text-green-400">
                  {displayedText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-2 h-5 bg-green-400 ml-1"
                    />
                  )}
                </pre>
              </div>
            </div>

            {/* Right Panel - AI Enhanced */}
            <div className="space-y-4">
              <div className="text-sm text-blue-500 dark:text-blue-400 mb-3 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Enhanced Version
              </div>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm min-h-[200px]">
                <AnimatePresence>
                  {aiSuggestions.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 }}
                      className="flex items-start gap-2 mb-2 text-green-400"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.3 + 0.1 }}
                        className="text-blue-400"
                      >
                        ✓
                      </motion.span>
                      <span className="text-xs text-gray-400">
                        {suggestion.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <motion.pre 
                  className="text-blue-400 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: suggestions.length > 0 ? 1 : 0 }}
                  transition={{ delay: 1.5 }}
                >
{`function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.className = 'btn-primary';
  button.setAttribute('aria-label', 'Primary action');
  
  button.addEventListener('click', (event) => {
    event.preventDefault();
    handleClick();
  });
  
  return button;
}`}
                </motion.pre>
              </div>
            </div>
          </div>

          {/* AI Suggestions Bar */}
          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800/50"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    AI Improvements Made:
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.3 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.5 + index * 0.1 }}
                        className="text-green-500"
                      >
                        ✓
                      </motion.span>
                      {suggestion.text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedEditor;