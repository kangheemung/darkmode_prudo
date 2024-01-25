import React from 'react';
import './App.css';
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home'
import ThemeSwitch from './components/ThemeSwitch';
import Login from './components/Login';
import Form from './components/Form';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => current === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="App" id={theme}>
          <Header />
          <ThemeSwitch />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/v1/auth" element={<Login />} />
            <Route path="/api/v1/users" element={<Form />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
