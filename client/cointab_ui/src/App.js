import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
