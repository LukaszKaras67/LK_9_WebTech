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
import Product from './assets/components/Product'
import Counter from './assets/components/Counter'



 
// Łukaszek



function App() {
  function showMessage() {
      console.log("Kliknięto przycisk");
  }
  function selectProduct(name) {
  console.log("Wybrany produkt: " + name);
}
function showTechnology(name) {
    console.log("Wybrano: " + name);  
  }

  
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
         <button onClick={showMessage}>
            Kliknij
        </button>

      <h2>OnClick</h2>
      <Product 
        name="Laptop"
        price={20}
        selectProduct={selectProduct}
      />
      
    <button onClick={() => showTechnology("React")}>
      Pokaż technologię
    </button>
  
  
      <h2>useState</h2>
      <Counter />

      
    </>
  );
}

export default App;