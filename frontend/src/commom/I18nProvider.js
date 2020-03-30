import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import { loadLanguage } from '../i18n'

export default function I18nProvider({ children, language }) {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    async function loadMessages() {
      setLoading(true);
      setMessages(await loadLanguage(language));
      setLoading(false);
    }

    loadMessages();
  }, [language])

  return (
    loading ? null :
      <IntlProvider locale={language} messages={messages}>
        {children}
      </IntlProvider>
  );
}
