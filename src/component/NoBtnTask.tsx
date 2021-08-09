type taskData = {
    id: number;
    name: string;
    finishFN: Function;
    deleteFN: Function;
}

function NoBtnTask(task: taskData) {
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b">
            <span className="text-2xl"> <del>{task.name}</del> </span>
            <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl" onClick={() => task.finishFN(task.id)}>{''}</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={() => task.deleteFN(task.id)}>{''}</button>
            </div>
        </div>
    )

}

export default NoBtnTask