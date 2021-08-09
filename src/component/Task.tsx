import { useState } from 'react';


type taskData = {
    name: string;
}

function Task(task: taskData) {

    const [visible, setVisible] = useState(false)
    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    const [done, setDone] = useState(false)
    const isDone = () => {
        setDone(true)
    }

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={show} onMouseLeave={hide}>
            <span className="text-2xl"> {done ? <del>{task.name}</del> : task.name} </span>
            <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl" onClick={isDone}>{visible && done != true ? 'Done' : ''}</button>
                <button className="bg-red-400 w-24 text-2xl">{visible && done != true ? 'Delete' : ''}</button>
            </div>
        </div>
    )
}

export default Task

{/*
    template here
    
    <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={show} onMouseLeave={hide}>
            <span className="text-2xl"> {done ? <del>{task.name}</del> : task.name} </span>
            <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl" onClick={isDone}>{visible && done != true ? 'Done' : ''}</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={isDeleted}>{visible && done != true ? 'Delete' : ''}</button>
            </div>
    </div>*/}

{/* task input and add button templete
    <div className='flex space-x-1'>
        <input id='input' className='border border-gray-400 w-full text-2xl' onKeyDown={onKeyDownCallback} onChange={ev => { input = ev.target.value }}></input>
        <button id='addButton' onClick={() => addTask(input)} className='border border-gray-400 w-8 font-bold'>+</button>
    </div>*/}



{/* experimental code
    let [tasks, setTasks] = useState<taskData[]>([])
    let [input, setInput] = useState<string>('')
    // let [innerHTML, setInnerHTML] = useState() unused

    const addTask = (input: string) => {
        if (input === '') alert('Task cannot be empty.')
        else {
            // console.log(input)
            const newID = (new Date()).getTime()
            const newTasks = [{ id: newID, name: input }, ...tasks]
            setTasks(newTasks)
            // setTasks(<div><Task name={input}></Task>{tasks.props.children}</div>)
            // taskList.push(input)
            // document.querySelectorAll('input')[0].value = ''
            setInput('')
        }
    }

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }

*/}

{/*experimental code
    const finishTask = (id: number) => {
        const finishedTask = tasks.filter(x => x.id === id)
        const newTasks = tasks.filter(x => x.id !== id)
        finishedTask[0].name = "<del>" + finishedTask[0].name + "</del>"
        const newTasksPlusFinished = [...newTasks, finishedTask[0]]
        setTasks(newTasksPlusFinished)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') addTask(input)
    }


*/}




{/* experimental code
    
    return
    <div>
            
            <div className='mx-auto max-w-4xl'>

                
                <div className='flex space-x-1'>
                    <input id='input' className='border border-gray-400 w-full text-2xl'
                        onKeyDown={onKeyDownCallback} onChange={ev => { input = ev.target.value }}></input>
                    <button id='addButton' onClick={() => addTask(input)} className='border border-gray-400 w-8 font-bold'>+</button>
                </div>

                
                <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={show} onMouseLeave={hide}>
                    {tasks.map(x => <Task id={x.id} name={x.name}/>)}
                </div>
            </div>
        </div>

*/}