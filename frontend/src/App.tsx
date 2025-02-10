import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TradingInfo from './components/TradingInfo';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Crypto Trading Bot</h1>
        <Switch>
          <Route path="/" exact component={TradingInfo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;