import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Login from './Login';
import CourseArea from './CourseArea';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/course" /> : <Login onLogin={handleLogin} />}
            />
            <Route
              path="/course"
              element={isLoggedIn ? <CourseArea onLogout={handleLogout} /> : <Navigate to="/login" />}
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
