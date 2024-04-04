import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Features from './Components/Features';
import Plans from './Components/Plans';
import Trainers from './Components/Trainers';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/features' element={<Features/>}></Route>
          <Route path='/plans' element={<Plans/>}></Route>
          <Route path='/trainers' element={<Trainers/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
