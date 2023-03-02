import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

import NavBar from './Components/NavBar/NavBar';
import Login from './Pages/Authentication/Login/Login';
import ForgotPassword from './Pages/Authentication/Forgot-password/ForgotPassword';
import Home from './Pages/Home/Home';
import Register from './Pages/Authentication/Register/Register';
import ResetPassword from './Pages/Authentication/Reset-password/ResetPassword';
import Contact from './Pages/Contact/Contact';
import Details from './Pages/Details/Details';
import AddProperty from './Pages/Add-property/AddProperty';
import Search from './Pages/Search/Search';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile/Profile';
import Aside from './Pages/Dashboard/Aside/Aside';
import Categories from './Pages/Dashboard/Categories/Categories';
import Property from './Pages/Dashboard/Property/Property';
import User from './Pages/Dashboard/User/User';
import MyProperties from './Pages/Dashboard/MyProperties/MyProperties';

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
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/publier-annonce' element={<AddProperty/>}/>
          <Route path='/recherche' element={<Search/>}/>
          <Route path='/dashboard' element={<Aside/>}>
                <Route path='' element = {<Dashboard />}  />                 
                <Route path='profile' element = {<Profile />}  />   
                <Route path='utilisateurs' element = {<User />}  />                 
                <Route path='categories' element = {<Categories />}  />                 
                <Route path='annonces' element = {<Property />}  />                 
                <Route path='mes-annonces' element = {<MyProperties />}  />                                                 
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
