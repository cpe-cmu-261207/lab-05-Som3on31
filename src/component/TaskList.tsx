import Task from './Task'
import NoBtnTask from './NoBtnTask';
import { useState } from "react";

type Task = {
    name: string;
    id: number;
    finishFN: Function;
    deleteFN: Function;
}


function TaskList() {
    let [tasks, setTasks] = useState<Task[]>([])
    let [input, setInput] = useState('')
    let [doneTasks, setDoneTasks] = useState<Task[]>([])
    // let [innerHTML, setInnerHTML] = useState() unused


    const addTask = (input: string) => {
        if (input === '') alert('Task cannot be empty.')
        else {
            const newID = (new Date()).getTime()
            const newTasks = [{ name: input, id: newID, finishFN: finishBtn, deleteFN: deleteBtn }, ...tasks]
            setTasks(newTasks)
            setInput('')
        }
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key == "Enter") addTask(input)
    }

    const deleteBtn = (id: number) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }

    const finishBtn = (id: number) => {
        const newID = (new Date()).getTime()
        const finishedTask = tasks.filter(x => x.id === id)
        const newTasks = tasks.filter(x => x.id !== id)
        const newPlusDone = [...doneTasks,{name: finishedTask[0].name, id: finishedTask[0].id, finishFN: finishBtn, deleteFN: deleteBtn}]
        setTasks(newTasks)
        console.log(newPlusDone)
        setDoneTasks(newPlusDone)
    }



    return (
        <div className='max-w-screen-md mx-auto'>
            <div className='flex space-x-1'>
                <input id='input' className='border border-gray-400 w-full text-2xl' onKeyDown={onKeyDownCallback} onChange={ev => { input = ev.target.value }}></input>
                <button id='addButton' onClick={() => addTask(input)} className='border border-gray-400 w-8 font-bold'>+</button>


            </div>
            <div>
                {tasks.map(x => <Task name={x.name} id={x.id} finishFN={finishBtn} deleteFN={deleteBtn} />)}
            </div>
            <div>
                {doneTasks.map(x => <NoBtnTask name={x.name} id={x.id} finishFN={finishBtn} deleteFN={deleteBtn} />)}
            </div>
        </div>
    )
}

export default TaskList;