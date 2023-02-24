import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <header>
        <NavBar /> 
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
