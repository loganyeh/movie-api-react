import { Routes, Route } from 'react-router-dom';
import NavBar from "./component/NavBar";
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Info from "./pages/Info";
import { MyContext } from './context/MyContext';
import { useState } from 'react';

function App() {
  const [favArray, setFavArray] = useState([]);

  return (
    <>
      <div className="h-screen w-screen flex">
        <MyContext.Provider value={{ favArray, setFavArray }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/favorites' element={<Favorites />}/>  
            <Route path='/info' element={<Info />}/>
          </Routes>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
