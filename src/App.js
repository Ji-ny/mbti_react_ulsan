
import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SetMetaTag from './components/SetMetaTag/SetMetaTag';

function App() {

  return (
    <div>
      <Routes>
        <Route path={'/mbti_test_ulsan'} element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
