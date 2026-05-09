import React, { useState } from 'react';
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amina Hassan",
      track: "Frontend Development",
      bio: "Learning React and building interfaces. Passionate about creating user-friendly experiences.",
      skillLevel: "Beginner",
      isActive: true,
    },
    {
      id: 2,
      name: "Kofi Mensah",
      track: "Backend Development",
      bio: "Working with APIs and databases. Love solving complex server-side challenges.",
      skillLevel: "Intermediate",
      isActive: false,
    },
    {
      id: 3,
      name: "Fatima Osman",
      track: "Full Stack Development",
      bio: "Building end-to-end applications with modern technologies and best practices.",
      skillLevel: "Advanced",
      isActive: true,
    },
    {
      id: 4,
      name: "Kwame Asante",
      track: "Mobile Development",
      bio: "Creating cross-platform mobile apps with React Native and Flutter.",
      skillLevel: "Intermediate",
      isActive: true,
    },
    {
      id: 5,
      name: "Zainab Ahmed",
      track: "UI/UX Design",
      bio: "Designing beautiful and intuitive interfaces. Focused on user research and accessibility.",
      skillLevel: "Beginner",
      isActive: false,
    },
    {
      id: 6,
      name: "Chidi Okafor",
      track: "Data Science",
      bio: "Analyzing data and building machine learning models to solve real-world problems.",
      skillLevel: "Advanced",
      isActive: true,
    },
  ]);

  function toggleActive(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student
      )
    );
  }

  const activeStudents = students.filter(student => student.isActive).length;

  return (
    <div className="App">
      <Header />
      <ProfileList students={students} onToggleActive={toggleActive} />
      <Footer totalStudents={students.length} activeStudents={activeStudents} />
    </div>
  );
}

export default App;
