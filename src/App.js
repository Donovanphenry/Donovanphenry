import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import {makeStyles} from '@material-ui/styles';

import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';

const useStyles = makeStyles({
  appContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#252627',
    color: '#BEBEBE',
  },
});

// Temp

/**
 * Simple component with no state.
 *
 * See the basic-react from lecture 11 for an example of adding and
 * reacting to changes in state and lecture 16 for details on Material-UI
 *
 * @return {object} JSX
 */
function App() {
  const classes = useStyles();

  return (
    <div className = {classes.appContainer}>
      <Router>
        <Switch>
          <Route path = '/' exact>
            <Home />
          </Route>

          <Route path = '/Resume'>
            <Resume />
          </Route>

          <Route path = '/JobPortfolio'>
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
