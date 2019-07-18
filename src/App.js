import React, { Component } from 'react';
import MenuBar from './MenuBar';
import HomeLayout from './HomeLayout';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Banner/> */}
        <MenuBar/>
        <div>
          <HomeLayout/>
        </div>
      </div>
    );
  }
}
export default App;
