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
import Samochod from './assets/components/Samochod'
import Book from './assets/components/Book'



function App() {

  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Baza danych",
      hours: 20
    },
    {
    id: 4,
    name: "Express",
    category: "Backend",
    hours: 25
    },
    {
    id: 5,
    name: "MongoDB",
    category: "Baza danych",
    hours: 20
    }
  ];
  const students = [
  { id: 1, name: "Anna", className: "4P", specialization: "programista",age: 67 },
  { id: 2, name: "Jan", className: "4P", specialization: "programista",age: 26 },
  { id: 3, name: "Adam", className: "4P",specialization: "programista",age: 12  }
];
  const samochody = [
  { id: 1, name: "BMW"},
  { id: 2, name: "Opel"},
  { id: 3, name: "Honda"},
  { id: 4, name: "Ferrari"},
  { id: 5, name: "Fiat"},
];
const books = [
{ id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
{ id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
{ id: 3, title: "Lalka", author: "Bolesław Prus" }
];

  return (
    <>
      <Header />

      <main>
        {technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours}
          />
        ))}
        {
          students.map((student) => (
            <Student 
            key={student.id}
            name={student.name}
            className={student.className}
            specialization={student.specialization}
            age={student.age}
            />
          )
        )
        }
          {samochody.map((samochod) => (
          <Samochod
            key={samochod.id}
            name={samochod.name}
            
          />
        ))}
        {books.map((book)=> (
          <Book 
            key={book.id}
            title={book.title}
            author={book.author}
          />
        )
      )}
      </main>
        
      <Footer />
    </>
  );
}

export default App;


