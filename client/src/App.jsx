import React from 'react';
import './App.css'
import {Routes,Route} from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';

function App() {

  return (
    <>
    <Routes>
<Route path='/' element={<User/>} />
<Route path='/add' element={<Add/>} />
<Route path='/edit/:id' element={<Edit/>} />
     
    </Routes>
    </>
  )
}

export default App;
