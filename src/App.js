import React from 'react';
import { Navbar } from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';


function App(){
    return (
      <div>
        <GlobalStyle/>
      <Navbar/>
      <Hero/>
      </div>
    );
}

export default App;