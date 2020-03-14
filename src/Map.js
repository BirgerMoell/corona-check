import React from 'react';
import './App.css';

function Map() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Corona Map
        </p>
        <iframe title="Corona Map" src="https://www.google.com/maps/d/embed?mid=1TMOByi-En0vrRnxSiI3GqAh9rOaPe-zo" width="80%" height="800px"></iframe>
      </header>
    </div>
  );
}

export default Map;