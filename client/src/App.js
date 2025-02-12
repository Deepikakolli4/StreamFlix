import { Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Favourites from './pages/Favourites';
import NavBar from './Components/NavBar/NavBar';
import { MovieProvider } from './Context/MovieContext';
function App() {
  return (
      <MovieProvider>
      <NavBar />
    <div className='main-content'>
      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </div>
    </MovieProvider>
  );
}

export default App;
