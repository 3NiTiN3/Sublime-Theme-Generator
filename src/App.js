import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#282c34');
  const [textColor, setTextColor] = useState('#abb2bf');
  const [keywordColor, setKeywordColor] = useState('#c678dd');

  const generateTheme = () => {
    const theme = {
      name: "Custom Theme",
      settings: [
        {
          settings: {
            background: backgroundColor,
            foreground: textColor,
            keyword: keywordColor
          }
        }
      ]
    };

    const blob = new Blob([JSON.stringify(theme, null, 2)], { type: 'application/json' });
    saveAs(blob, 'custom-theme.sublime-theme');
  };

  return (
    <div className="App">
      <h1>Create Your Custom Sublime Theme</h1>
      <div className="color-pickers">
        <ColorPicker color={backgroundColor} onChange={setBackgroundColor} label="Background Color" />
        <ColorPicker color={textColor} onChange={setTextColor} label="Text Color" />
        <ColorPicker color={keywordColor} onChange={setKeywordColor} label="Keyword Color" />
      </div>
      <button onClick={generateTheme}>Generate Theme</button>
    </div>
  );
}

export default App;
