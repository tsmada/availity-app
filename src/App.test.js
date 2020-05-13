import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

test('should have browser history available', () => {
  const { getByText } = render(<App history={history} />);
});
