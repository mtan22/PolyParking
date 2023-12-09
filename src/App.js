// App.js
import React from 'react';
import Map from './components/Map';
import './App.css'; // Import your modified CSS file

const App = () => {
  return (
    <div className="App-header"> {/* Change the class name here */}
      <h1>POLYPARKING</h1>
      <Map />
    </div>
  );
};

export default App;
