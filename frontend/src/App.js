import React, { useState } from "react";
import I18nProvider from './commom/I18nProvider';
import "./global.css";

import Routes from "./routes";

function App() {
  const [lang, setLang] = useState('pt-BR');

  return (
    <I18nProvider language={lang}>
      <button style={{ position: 'absolute' }} onClick={() => setLang(lang === 'pt-BR' ? 'en-US' : 'pt-BR')}>
        {'toogle lang'}
      </button>
      <Routes />;
    </I18nProvider>
  )
}

export default App;
