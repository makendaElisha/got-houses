import React from 'react';
import useFetch from './useFetch';
import Loader from './components/Loader';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  const { data: houses, loading, error } = useFetch(
    "https://anapioficeandfire.com/api/houses"
  );

  if (loading) return <Loader />;

  if (error) console.log(error);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home houses={houses} />}/>
        <Route path="/house/:id/:image" element={<Details houses={houses}/>}/>
      </Routes>
    </div>
  );
}

export default App;
