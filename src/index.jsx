import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

// Force RTL for Arabic
document.documentElement.lang = 'ar';
document.documentElement.dir = 'rtl';
document.body.className = 'rtl';

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.body.className = lng === 'ar' ? 'rtl' : 'ltr';
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);