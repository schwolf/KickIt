import React from 'react';
import ReactDOM from 'react-dom';

// Import non-js files like this, with the extension and an exclamation point:
import KickIt from './components/KickIt.jsx!'

(() => {
  ReactDOM.render(
    React.createElement(KickIt, null),
    document.getElementById('app')
  )
})();
