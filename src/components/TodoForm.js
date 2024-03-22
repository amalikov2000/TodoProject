import React, {useState} from 'react'

// Компонент TodoForm, отвечающий за добавление новых задач todo
export const TodoForm = ({addTodo}) => {
    // Перехватчик состояния для управления значением поля ввода
    const [value, setValue] = useState("")

    // Функция для обработки отправки формы
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
    return (
        // Элемент формы с именем класса 'TodoForm' и обработчиком события onSubmit
        <form className='TodoForm' onSubmit={handleSubmit}>
            {/* Поле ввода для ввода новых задач */}
            <input type ="text" className='todo-input' value = {value}
            placeholder='What is the task today?' onChange=
            {(e) => setValue(e.target.value)} // обработчик события onChange для обновления состояния «value»
            /> 
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}