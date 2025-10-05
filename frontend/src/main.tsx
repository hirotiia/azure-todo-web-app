import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('ルート要素が見つかりません。');

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
