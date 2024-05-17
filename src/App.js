
import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SetMetaTag from './components/SetMetaTag/SetMetaTag';

import istpImage from "./images/istp.jpg";
import isfpImage from "./images/isfp.jpg";
import istjImage from "./images/istj.jpg";
import isfjImage from "./images/isfj.jpg";
import infjImage from "./images/infj.jpg";
import intjImage from "./images/intj.jpg";
import infpImage from "./images/infp.jpg";
import intpImage from "./images/intp.jpg";
import esfpImage from "./images/esfp.jpg";
import estpImage from "./images/estp.jpg";
import esfjImage from "./images/esfj.jpg";
import estjImage from "./images/estj.jpg";
import entpImage from "./images/entp.jpg";
import enfpImage from "./images/enfp.jpg";
import enfjImage from "./images/enfj.jpg";
import entjImage from "./images/entj.jpg";
import Result from './components/Result/Result';

function App() {

  return (
    <div>
      {/* 디폴트 메타태그를 정의하자. */}
      <SetMetaTag description="각경휴" image = {istpImage} ></SetMetaTag>
      <Routes>
        <Route path={'/mbti_test_ulsan'} element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
