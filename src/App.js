import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

import NavBar from './Components/NavBar/NavBar';
import Login from './Pages/Authentication/Login/Login';
import ForgotPassword from './Pages/Authentication/Forgot-password/ForgotPassword';
import Home from './Pages/Home/Home';
import Register from './Pages/Authentication/Register/Register';
import ResetPassword from './Pages/Authentication/Reset-password/ResetPassword';

function App() {
  return (
    <>
      <header>
        <NavBar /> 
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/connexion' element={<Login/>}/>
          <Route path='/inscription' element={<Register/>}/>
          <Route path='/mot-de-passe-oublier' element={<ForgotPassword/>}/>
          <Route path='/réinitialiser-le-mot-de-passe' element={<ResetPassword/>}/>
        
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
