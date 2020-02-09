import React from 'react';
import HomePage from './pages/HomePage';
import CharacterDetails from './pages/ChracterDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path='/character/:id' component={CharacterDetails} />
            </Switch>
          </div>
        </Router>
  );
}

export default App;
