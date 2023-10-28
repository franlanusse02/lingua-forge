import React, { useState } from 'react'; // Import useState
import NavBar from './navbar'; // Import your NavBar component
import Home from './Home'; // Import the Home component
import Languages from './Languages'; // Import the Languages component

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  // Function to set the current tab when a tab is clicked
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };
  

  return (
    <div className="App">
      <navbar currentTab={currentTab} onTabClick={handleTabClick} /> {/* Pass currentTab and onTabClick props */}
      {currentTab === 'Home' && <Home />}
      {currentTab === 'Languages' && <Languages />}
      {/* Add more components for other tabs */}
    </div>
  );
}

export default App;
