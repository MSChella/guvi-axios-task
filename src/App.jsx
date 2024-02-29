
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import SignupForm from './Pages/signup';
import Navigation from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route Component={SignupForm} path='/signup'> </Route>
        <Route Component={HomePage} path='/'></Route>
        <Route Component={Login} path='/login'></Route>
      </Routes>

      <Footer />

    </>
  )
}

export default App;
