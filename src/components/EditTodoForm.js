import React, {useState} from 'react'


// Этот компонент - форма используемая для редактирования todo таска .
// Он получает два props: функцию editTodo и task object.
export const EditTodoForm = ({editTodo, task}) => {
    // Хук useState используется для управления состоянием поля ввода.
    // Исходное состояние - содержимое текущего таска.
    const [value, setValue] = useState(task.task)
    // Эта функция вызывается при отправке формы.
    const handleSubmit = e => {
        e.preventDefault();

        // Вызывает функцию editTodo, переданную как проп
        // передаем обновленное содержимое задачи (value) и task id.
        editTodo(value, task.id);
        // Очищает поле ввода
        setValue("")
    }
    return (
        // Элемент формы с именем класса «TodoForm» и обработчиком события onSubmit.
        <form className='TodoForm' onSubmit={handleSubmit}>
            {/* Поле ввода для обновления содержимого задачи.
                Значение входа контролируется состоянием «value».
                Когда входное значение изменяется, функция setValue обновляет состояние. */}
            <input type ="text" className='todo-input' value = {value}
            placeholder='Update Task' onChange=
            {(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}