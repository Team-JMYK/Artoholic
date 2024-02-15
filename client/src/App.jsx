import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/authContext';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import UploadImage from './component/UploadImage';
import { useEffect, useState } from 'react';

function App() {
  const [newImageURL, setNewImageURL] = useState("");

  function handleNewImageURL(imageURL) {
    setNewImageURL(imageURL);
  }

  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar onHandleNewImageURL={handleNewImageURL}/>
          <Routes>
            <Route path="/" exact element={<Home newImageURL={newImageURL}/>} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
