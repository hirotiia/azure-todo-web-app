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
