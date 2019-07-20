import React, { Component } from 'react';
import MenuBar from './MenuBar';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Banner/> */}
        <MenuBar/>
        <div>
          <AppRouter/>
        </div>
      </div>
    );
  }
}
export default App;
