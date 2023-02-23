import './App.css';
import Footer from './Components/Footer/Footer';

import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <header>
        <NavBar /> 
        <div className='hero-back'></div>
      </header>
      <main>
        <Home/>
      </main>
      <Footer />
    </>
  );
}

export default App;
