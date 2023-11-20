import React from 'react';
import Navbar from './Components/Navbar'
import Flag from './Components/Flag'
import RankCard from './Components/RankCard';
import ScoreCard from './Components/ScoreCard';


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
