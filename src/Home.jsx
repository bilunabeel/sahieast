import React, { useState } from 'react';
import Nav from './Sections/Nav';
import Hero from './Sections/Hero';
import Message from './Sections/Message';
import Ribbon from './components/Ribbon';
import WhatSahi from './Sections/WhatSahi';
import Footer from './Sections/Footer';
import Counts from './Sections/Counts';
import Sample from './Sections/Sample';
import Gallery from './Sections/Gallery';
import Live from './components/Live';


const Home = () => {
  const [onLive,setOnlive] = useState(true)
  return (
    <div>
      <Nav />
      {onLive && <Live/>}
      
      <Hero />
      <Ribbon />
      <Message />
      <WhatSahi />
      {/* <Counts/> */}
      <Gallery/>
{/* <Sample/> */}
      <Footer/>
    </div>
  );
};

export default Home;
