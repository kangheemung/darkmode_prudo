import React from 'react';
import './App.css';
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home'
import ThemeSwitch from './components/ThemeSwitch';
import Login from './components/Login';
import Form from './components/Form';
import Post from './components/Post/Post';
import PostList from './components/Post/PostList';
import Count from './components/kadai/Count';
import Toggle from './components/kadai/Toggle';
import ColorSwitcher from './components/kadai/ColorSwitcher';
import Sidebar from './components/Sidebar'


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
          <Header className="header"/>
          <div className="flex-container">
          <Sidebar />
          <div className='contain'>
          <ThemeSwitch  className="switch" />
          <Routes  className="contain_main">
            <Route path="/" element={<Home />} />
            <Route path="/ColorSwitcher" element={<ColorSwitcher/>} />
            <Route path="/count" element={<Count />} />
            <Route path="/toggle" element={<Toggle />} />
            <Route path="/api/v1/auth" element={<Login />} />
            <Route path="/api/v1/users" element={<Form />} />
            <Route path="/api/v1/post" element={<Post />} />
            <Route path="/api/v1/postList" element={<PostList />} />
            {/* Add other routes as needed */}
          </Routes>
          </div>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
