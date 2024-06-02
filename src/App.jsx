import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Home } from './index';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [login, setLogin] = useState(false);

  const handleShowLogin = () => {

    setShowLogin(true);

  }
  const handleShowSubmit = () => {

    setShowSignup(true);

  }
  const handleLogin = (e) => {
    e.prevntDefault();
    setLogin(false)
  }

  return (
    <div>
      
      <div className="p-4 h-svh bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 transition ease-in-out">
        <BrowserRouter>
          <Navbar
            handleLogin={handleLogin}
            handleShowLogin={handleShowLogin}
            showLogin={showLogin}
            handleShowSubmit={handleShowSubmit}
            showSignup={showSignup} />
          <Routes>
            <Route index element={<Home />} />

          </Routes>
        </BrowserRouter>
      </div>


    </div>
  )
}

export default App
