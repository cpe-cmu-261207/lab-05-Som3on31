import { useState } from 'react';


type task2Type = {
    id: number;
    name: string;
}

function Task(task: task2Type) {

    let [tasks, setTasks] = useState<task2Type[]>([])
    let [input, setInput] = useState<string>('')
    // let [innerHTML, setInnerHTML] = useState() unused

    const addTask = (taskName: string) => {
        if (taskName === '') alert('Task cannot be empty.')
        else {
            const newID = (new Date()).getTime()
            const newTasks = [...tasks, { id: newID, name: taskName }]
            setTasks(newTasks)
            // console.log(input)
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

    const finishTask = (id: number) => {
        const placeholder = tasks.filter(x => x.id === id)
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
        const newID = (new Date()).getTime()
        const newTasksPlusFinished = [...newTasks, { id: newID, name: placeholder[0].name }]
        setTasks(newTasksPlusFinished)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') addTask(input) /* check pressing enter key here */
    }

    const [visible, setVisible] = useState(false)


    const [done, setDone] = useState(false)

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    const isDone = () => {
        setDone(true)
    }

    const [deleted, setDeleted] = useState(false)
    const isDeleted = () => {      //I'm still trying to implement this
        setDeleted(true)
    }

    return (
        <div>
            {/* task input and add button */}
            <div className='flex space-x-1'>
                <input id='input' className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={ev => { input = ev.target.value }}></input>
                <button id='addButton' onClick={() => addTask(input)} className='border border-gray-400 w-8 font-bold'>+</button>
            </div>

            <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={show} onMouseLeave={hide}>
                <span className="text-2xl"> {done ? <del>{task.name}</del> : task.name} </span>
                <div className="flex space-x-1 items-center">
                    <button className="bg-green-400 w-24 text-2xl" onClick={isDone}>{visible && done != true ? 'Done' : ''}</button>
                    <button className="bg-red-400 w-24 text-2xl" onClick={isDeleted}>{visible && done != true ? 'Delete' : ''}</button>
                </div>
            </div>
        </div>
    )
}

export default Task

{/*<div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={show} onMouseLeave={hide}>
            <span className="text-2xl"> {done ? <del>{task.name}</del> : task.name} </span>
            <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl" onClick={isDone}>{visible && done != true ? 'Done' : ''}</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={isDeleted}>{visible && done != true ? 'Delete' : ''}</button>
            </div>
</div>*/}


{/*let innerContext_text = <span className="text-2xl"> {done ? <del>{task.name}</del> : task.name} </span>
    let innerContext_btn1 = <button className="bg-green-400 w-24 text-2xl" onClick={isDone}>{visible && done != true ? 'Done' : ''}</button>
    let innerContext_btn2 = <button className="bg-red-400 w-24 text-2xl" onClick={isDeleted}>{visible && done != true ? 'Delete' : ''}</button>
    let innerContext_btnG = <div className="flex space-x-1 items-center">{innerContext_btn1}{innerContext_btn2}</div>

let context = { deleted?: <div></div> }*/}