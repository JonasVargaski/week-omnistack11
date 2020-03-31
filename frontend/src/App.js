import React, { useState } from "react";
import I18nProvider from './commom/I18nProvider';
import "./global.css";

import { languages } from './i18n';
import Routes from "./routes";
import Select from './components/Select';

function App() {
  const [lang, setLang] = useState(window.localStorage.getItem('user_language') ?? 'pt-BR');

  return (
    <I18nProvider language={lang}>
      <Select value={lang} onChange={setLang} options={languages} />
      <Routes />;
    </I18nProvider>
  )
}

export default App;
