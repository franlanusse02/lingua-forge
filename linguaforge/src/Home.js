import React from 'react';
import NavBar from './navbar';
import LanguageCard from './LanguageCardHome';
import './Home.css';

function Home() {
  const recentlyVisitedLanguages = [
    { name: 'Spanish', lastVisit: '2 days ago' },
    { name: 'French', lastVisit: '1 week ago' },
    // Add more languages
  ];

  return (
    <div className="Home">
      <NavBar />

      <div className="home">
        <h1>Welcome to LinguaForge!</h1>

        <div className="cards-container">
          {recentlyVisitedLanguages.map((language) => (
            <LanguageCard key={language.name} title={language.name} content={`Last visited ${language.lastVisit}`} />
          ))}

          <LanguageCard title="Create a New Language" content="Start your language learning journey by creating a new language." />
        </div>
      </div>
    </div>
  );
}

export default Home;
