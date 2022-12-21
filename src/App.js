import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/home/Home';
import LoginForm from './components/authenticationform/loginform/LoginForm'
import RegistrationForm from './components/authenticationform/registration/RegistrationForm'



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content--container'>
        <BrowserRouter>
          <Routes>
            <Route path='/'
            // element={user ? <Home /> : <Navigate to="/login" />} 
            element={<Home/>}
            />
            <Route path='/login'
              element={<LoginForm />}
            // element={!user ? <LoginForm /> : <Navigate to="/" />} 
            />
            <Route path='/signup'
              element={<RegistrationForm />}
            // element={!user ? <RegistrationForm /> : <Navigate to="/" />} 
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
