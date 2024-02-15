import React, { Component } from 'react'
import "../App.css"
import Navbar from "../component/Navbar";
import HeroSection from '../component/HeroSection';
import Cards from '../component/Cards';
import Footer from '../component/Footer';
import Dashboard from './Dashboard';
import { useEffect, useState } from 'react';

const Home = ({newImageURL}) => {
  return (
    <>
      <div>
        <HeroSection/>
        <Cards newImageURL={newImageURL}/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;