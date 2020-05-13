import React from 'react';
import Application from './containers/App';
import './App.css';
import './tailwind.generated.css';

const App = ({ history }) => (
  <div className="App">
    <Application history={history} />
  </div>
);

export default App;
