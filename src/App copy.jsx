import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Student from './assets/components/Student'
import './App.css'
import Header from './assets/components/Header'



function App() {

  <>
    <Header/>
  </>
  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Twoje imię i nazwisko",
    technologiesCount: 3
  };
  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};
const student = {
  name: "Łukasz",
  surname: "Karaś",
  className: "4P",
  specialization: "technik programista"
};
const course = {
  name: "Teoria",
  teacher: "Rafał Taraszka",
  hours: 6.7,
  completed: 2
};

  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>
      <p>{technology.name}</p>
      <p>Kategoria: {technology.category}</p>
      <p>Liczba godzin: {technology.hours}</p>

      <p>Uczeń: {student.name}</p>
      <p>Klasa: {student.className}</p>
      <p>Kierunek: {student.specialization}</p>

      <section>
        <h2>{course.name}</h2>
        <p>Nauczyciel: {course.teacher}</p>
        <p>Godziny: {course.hours}</p>
        <p>Ukończone: {course.completed}</p>
      </section>
    </div>
    
  );
}

export default App;