import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '@/components/app';
import { registerSW } from '@/sw/register-sw';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerSW()
