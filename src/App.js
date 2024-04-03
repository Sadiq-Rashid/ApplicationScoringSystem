import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './common/Main';






const App = () => {
  return (
    <div style={{backgroundColor: '#94a3b8'}}>
      <BrowserRouter>
      <Routes>
          <Route path='/'  element={<Signup /> }/>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/main/*' element={<Main />} />
          <Route />
      </Routes>
      
      </BrowserRouter>
   </div>
  );
};

export default App;
