import { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext)



    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, description });
        setTitle("");
        setDescription("")
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 rounded-md'>
                <h1 className='text-2xl font-bold text-white py-2'>Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-3 rounded-md isRequired'
                    autoFocus
                />
                <textarea placeholder='Descripcion de la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-slate-300 p-3 w-full mb-2 rounded-md resize-none isRequired'
                    value={description}>
                </textarea>
                <button className='bg-indigo-500 px-3 py-1 rounded-md text-white hover:bg-indigo-800'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm