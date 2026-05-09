# Student Profile Directory

A React application that displays student profiles with interactive features. Built to demonstrate core React concepts including components, props, state management, and conditional rendering.

## Features

- Display multiple student profile cards
- Toggle student active/inactive status
- Dynamic rendering from data array
- Reusable components
- Coffee-themed color scheme
- Responsive design

## Project Structure

```
src/
├── App.js                      # Main component with state management
├── App.css                     # Main app styling
├── components/
│   ├── Header.js               # App title header
│   ├── Header.css
│   ├── ProfileList.js          # Maps through students array
│   ├── ProfileList.css
│   ├── ProfileCard.js          # Individual student card
│   ├── ProfileCard.css
│   ├── Footer.js               # Shows student totals
│   └── Footer.css
```

## Components Overview

### App.js
- Manages student data using `useState`
- Contains `toggleActive` function to update student status
- Passes data and functions down to child components via props

### Header
- Displays the application title

### ProfileList
- Receives students array as props
- Uses `.map()` to render ProfileCard for each student

### ProfileCard
- Displays individual student information
- Uses conditional rendering for Active/Inactive status
- Includes button to toggle status
- Dynamic CSS classes based on skill level

### Footer
- Shows total number of students
- Shows count of active students

## Getting Started

### Installation

```bash
npm install
```

### Run the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Student Data Structure

Each student object contains:
- `id` - Unique identifier
- `name` - Student name
- `track` - Area of study
- `bio` - Short description
- `skillLevel` - Beginner, Intermediate, or Advanced
- `isActive` - Boolean for active status

## Key React Concepts Used

- **Components** - Reusable UI pieces
- **Props** - Passing data from parent to child
- **State** - Managing data that changes with `useState`
- **Conditional Rendering** - Showing different UI based on data
- **Event Handling** - Responding to button clicks
- **Array Methods** - `.map()` and `.filter()` for rendering lists

## Color Scheme

- Primary: Coffee Brown (#6F4E37)
- Secondary: White
- Background: Beige (#F5F5DC)

## Technologies

- React 19.2.6
- Create React App
- CSS3
