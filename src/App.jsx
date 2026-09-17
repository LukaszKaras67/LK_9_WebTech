import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import Student from './assets/components/Student'
import Technology from './assets/components/Technology'
import Footer from './assets/components/Footer'
import Infobox from './assets/components/Infobox'
import Navigation from './assets/components/Nagivation'
import CourseCard from './assets/components/CourseCard'



function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>

        <Technology />

        <Technology />

        <Technology />

      </main>

      <Footer />

      <Student/>

      <Infobox/>
      <h2>Dodatkowe</h2>
      <CourseCard/>

      
    </>
  );
}

export default App;