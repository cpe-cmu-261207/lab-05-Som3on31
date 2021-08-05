type task2Type = {
    task: string;
}


function task(task: task2Type) {
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b">
            <span className="text-2xl"> {task} </span>
            <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl" >Done</button>
                <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
        </div>
    )
}

export default task;