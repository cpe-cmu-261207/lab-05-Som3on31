import { useState } from 'react';


type task2Type = {
    name: string;
}

function Task(task: task2Type) {
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
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={show} onMouseLeave={hide}>
            <span className="text-2xl"> {done ? <del>{task.name}</del> : task.name} </span>
            <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl" onClick={isDone}>{visible && done != true ? 'Done' : ''}</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={isDeleted}>{visible && done != true ? 'Delete' : ''}</button>
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