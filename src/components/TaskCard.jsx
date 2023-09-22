import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className='bg-gray-800 text-white rounded-md'>

            <div className='m-4'>
                <h1 className='text-xl font-bold'>{task.title}</h1>
                <p className='text-gray-500 text-sm'>{task.description}</p>
            </div>

            <div className='m-4 flex justify-center'>
                <button className='bg-red-500 px-2 py-1 rounded-md hover:bg-red-400'
                    onClick={() => deleteTask(task.id)}>
                    Eliminar tarea
                </button>
            </div>
        </div>
    )
}
export default TaskCard