import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import Members from './pages/Members';
import Member from './pages/Member';
import Items from './pages/Items';
import Item from './pages/Item';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}>
          <Route path='company' element={<AboutCompany/>}/>
          <Route path='me' element={<AboutMe/>}/>
        </Route>
        <Route path='/user' element={<ProtectedRoute>
          <Members/>
        </ProtectedRoute>}>
          <Route path=':userName' element={<Member/>}/>
        </Route>
        <Route path='/items' element={<ProtectedRoute>
          <Items/>
        </ProtectedRoute>}>
          <Route path=':id' element={<Item/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
