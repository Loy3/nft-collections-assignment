//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
// <Navbar />

import Header from './components/Header/Header';
//<Header />

import Journey from './components/Journey/Journey';
//<Journey />

import TrendingNft from './components/TrendingNft/TrendingNft';
//<TrendingNft />

import Artists from './components/Artists/Artists';
//<Artists />

import Subscribe from './components/Subscribe/Subscribe';
//<Subscribe />

import Project from './components/Project/Project';
//  <Project />

import Footer from './components/Footer/Footer';



function App() {

  return (
    <div className="App">

      <Navbar />
      <Header />

      <main>
        <div>
          <Journey />
          <TrendingNft />
          <Artists />
          <Subscribe />
          <Project />
        </div>
      </main>

      <Footer />


    </div >
  );
}

export default App;
