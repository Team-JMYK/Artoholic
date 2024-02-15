import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/authContext';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import UploadImage from './component/UploadImage';

function App() {
  return (
    <>
      <UploadImage />
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />

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
