import React from 'react';
import { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import TaskList from './component/TaskList';


function App() {

  

  return (
    <div>

      {/* header section */}
      <Header/>
      


      <TaskList/>

      <Footer/>
    </div>

  );
}

export default App;
