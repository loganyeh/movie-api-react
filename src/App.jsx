import { Routes, Route, Router } from 'react-router-dom';
import { MyContext } from './context/MyContext';
import { useContext } from 'react';
import NavBar from "./component/NavBar";
import Movies from "./component/Movies";
import Favorites from "./pages/Favorites";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <NavBar />
        <Routes>
          <Route path="/" element={<Movies />}/>
          <Route path='/favorites' element={<Favorites />}/>  
          <Route path='/info' element={<Info />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
