import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import { EditPage } from './EditPage';
import { HomePage } from './HomePage';
import { NewPage } from './NewPage';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/new' element={<NewPage />}/>
        <Route path='/edit:id' element={<EditPage />}/>
        <Route path='/*' element={<h1>Not Found</h1>}/>
      </Routes>
    </HashRouter>
  );
}

export  { App };
