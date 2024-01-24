import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/sign/sign';

function App() {
  return (
    <div className="ui">
      
      <Routes>

      <Route element={<Home/>} path='/' />
      <Route element={<Sign/>} path='/sign-in' />
      <Route element={<Sign/>} path='/sign-up' />
      
      </Routes>
    </div>
  );
}

export default App;
