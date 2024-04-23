import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Aboutus from './components/AboutUs';
import Header from './components/Header';
import CuteUrlForm from './components/cuteUrlForm';


function App() {
  return (
    <BrowserRouter>

    <div className='App'>
    <Header/>
    </div>

    <Routes>
      <Route path='/' element= {<CuteUrlForm/>} />
      <Route path='/AboutUs' element= {<Aboutus/>} />
    </Routes>

</BrowserRouter>

  );
}

export default App;
