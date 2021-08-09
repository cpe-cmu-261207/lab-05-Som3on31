import React from 'react';
import { useState } from 'react';
import Header from './component/Header';
import Task from './component/Task';
import Footer from './component/Footer';
import TaskList from './component/TaskList';


function App() {

  let [tasks, setTasks] = useState(<div></div>)
  let [input, setInput] = useState('')
  // let [innerHTML, setInnerHTML] = useState() unused

  let taskList = []

  const addTask = () => {
    if (input === '') alert('Task cannot be empty.')
    else {
      // console.log(input)
      setTasks(<div><Task name={input}></Task>{tasks.props.children}</div>)
      taskList.push(input)
      document.querySelectorAll('input')[0].value = ''
      setInput('')
    }
  }

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key == "Enter") addTask()
  }

  return (
    <div>

      {/* header section */}
      <Header/>
      

      <div className='flex space-x-1'>
        <input id='input' className='border border-gray-400 w-full text-2xl' onKeyDown={onKeyDownCallback} onChange={ev => { input = ev.target.value }}></input>
        <button id='addButton' onClick={() => addTask()} className='border border-gray-400 w-8 font-bold'>+</button>
      </div>


      {/*Tasks*/}
      {tasks}

      <Footer/>
    </div>

  );
}

export default App;
