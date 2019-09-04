import React from 'react';
import './App.css'
import profile from './assets/profile.png';
import TechList from './components/TechList';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <img src={profile} />
      <TechList />
    </>
  );
}
