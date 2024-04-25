
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://text-translator2.p.rapidapi.com/translate';

function App() {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState('');

  const translateText = async () => {
    try {
      const response = await axios.post(
        API_URL,
        { source_lang: sourceLanguage, target_lang: targetLanguage, text: text },
        { headers: { 'x-rapidapi-key': 'd1c9458aabmsh744fb2179aba952p1e5c0bjsnf68a9e030f92' } }
      );
      setTranslatedText(response.data.translated_text);
      setError('');
    } catch (err) {
      setError('An error occurred while translating text. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Universal Language Translator</h1>
      <div className="language-selectors">
        <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
          
        </select>
        <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
          
        </select>
      </div>
      <textarea
        placeholder="Enter text to translate..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={translateText}>Translate</button>
      {error && <p className="error">{error}</p>}
      <div className="translated-text">
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default App;
