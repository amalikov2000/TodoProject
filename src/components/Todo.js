import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            {/* Задача Todo отображается в виде p */}
            <p onClick={() => toggleComplete(task.id)} // Переключаем статус завершения при нажатии
            className={`${task.completed ? 'completed': ''}`} // Условно применяем класс «completed», если задача завершена
            >
                {task.task} {/* Отображаем  task content */}
            </p>
            <div>
                {/* Edit icon */}
                <FontAwesomeIcon icon={faPenToSquare} // Иконка редактирования задачи
                onClick={() => editTodo(task.id)} // Вызывает функцию editTodo с идентификатором задачи при нажатии
                />
                <FontAwesomeIcon icon={faTrash} // Иконка удаления задачи
                onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
} 