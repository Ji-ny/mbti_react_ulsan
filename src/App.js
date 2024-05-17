
import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SetMetaTag from './components/SetMetaTag/SetMetaTag';
import enfjImage from './images/enfj.jpg'
function App() {

  return (
    <div>
      <SetMetaTag title="cute" description="설명부분" image={enfjImage}/>
      <Routes>
        <Route path={'/mbti_test_ulsan'} element={<Home/>}/>
        <Route path={'/mbti_test_ulsan/result'} element={<div>결과 페이지에용 .</div>}/>
      </Routes>
      
    </div>
  );
}

export default App;
