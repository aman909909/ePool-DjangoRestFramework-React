import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';


class App extends Component {
  state = {  }
  render() { 
    return (  
      <div>
        <Navbar clicked="home"/>

      </div>
    );
  }
}
 
export default App;