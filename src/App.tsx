import React from 'react';
import { useState } from 'react';
import Task from './Task'

function App() {

  let [tasks, setTasks] = useState(<div></div>)
  let [input, setInput] = useState('')
  // let [innerHTML, setInnerHTML] = useState() unused



  const addTask = () => {
    /* check pressing enter key here */
    if (input === '') alert('Task cannot be empty.')
    else {
      // console.log(input)
      setTasks(<div><Task name={input}></Task>{tasks.props.children}</div>)
      document.querySelectorAll('input')[0].value = ''
      setInput('')
    }
  }

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
    if (ev.key === 'Enter') addTask()
  }

  const kek = () => {

  }







  return (
    <div>

      {/* header section */}
      <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by Saharit Kadkasem 630610767</span>
      </div>

      {/* todo section */}
      <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
          <input id='input' className='border border-gray-400 w-full text-2xl'
            onKeyDown={onKeyDownCallback} onChange = {ev => {input = ev.target.value}}></input>
          <button id='addButton' onClick={addTask} className='border border-gray-400 w-8 font-bold'>+</button>
        </div>


        {tasks}

      </div>

      {/* footer section */}
      <p className='text-center text-gray-400'> Copyright © 2021 </p>
    </div>
  );
}

export default App;
