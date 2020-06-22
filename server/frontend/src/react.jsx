import React from 'react';
import { render } from 'react-dom';
import App from './App';

const main = () => {
  // eslint-disable-next-line no-undef
  const element = document.getElementById('react-root');
  render(<App />, element);
};

main();
