import { useState } from 'react'
import Theme from './MuiTheme.style.js'
import { ThemeProvider } from "@mui/material/styles"
import Login from './pages/Login/Login.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import './App.css'

function App() {
  // State to control which page to show
  const [currentPage, setCurrentPage] = useState('login') // 'login' or 'home'

  // ========== NAVIGATION FUNCTIONS ==========
  // Function to navigate to HomePage after successful login
  const navigateToHome = () => {
    setCurrentPage('home');
  };

  // Function to navigate back to Login page
  const navigateToLogin = () => {
    setCurrentPage('login');
  };

  return (
    <ThemeProvider theme={Theme}>
      {/* Only render one component at a time */}
      {currentPage === 'login' ? (
        <Login onLoginSuccess={navigateToHome} />
      ) : (
        <HomePage onLogout={navigateToLogin} />
      )}
    </ThemeProvider >
  )
}

export default App
