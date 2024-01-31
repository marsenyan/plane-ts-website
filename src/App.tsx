import React from 'react';

import './main.scss';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Search } from './components/search/Search';
import { Support } from './components/support/Support';
import { Info } from './components/info/Info';
import { Lounge } from './components/lounge/Lounge';
import { BestTravelers } from './components/BestTravelers/BestTravelers';
import { Subscribe } from './components/subscribe/Subscribe';
import { Footer } from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <BestTravelers/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
