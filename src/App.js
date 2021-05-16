import React from 'react';

/**
 * Simple component with no state.
 *
 * See the basic-react from lecture 11 for an example of adding and
 * reacting to changes in state.
 */
class App extends React.Component {
  /**
   * @return {object} a <div> containing an <h2>
   */
  render() {
    return (
      <div>
        <h2 id='welcome'>CSE183 Assignment 5 - React I</h2>
      </div>
    );
  }
}

export default App;
