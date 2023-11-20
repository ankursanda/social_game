import React from 'react';
import Navbar from './Components/Navbar'
import Flag from './Components/Flag'
import RankCard from './Components/RankCard';
import ScoreCard from './Components/ScoreCard';
import styles from './styles/App.module.css';

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Flag />
      <RankCard />
      <ScoreCard />
    </div>
  );
}

export default App;
