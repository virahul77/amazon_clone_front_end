import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_in from "./translations/in/common.json";
import common_pk from "./translations/pk/common.json";
import common_bd from "./translations/bd/common.json";
import common_en from "./translations/en/common.json";


i18next.init({
  whitelist : ['pk','in','bd','en'],
  interpolation: { escapeValue: false },  
  // React already does escaping
  lng: 'pk',                              
  // language to use
  resources: {
      en: {
          common: common_en               
      },
      bd: {
          common: common_bd
      },
      in: {
          common: common_in
      },
      pk: {
          common: common_pk
      },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
