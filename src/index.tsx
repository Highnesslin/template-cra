import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import './index.css';

// 安装测试用的环境变量
if (process.env.NODE_ENV === 'development') {
  require('./utils/setUpTestEnv.js')();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
