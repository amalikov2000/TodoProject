import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4(); // Генерация уникального id  с использованием uuidv4

export const TodoWrapper = () => {
    // Состояние для управления списком тасков 
    const [todos, setTodos] = useState([])

    // функция чтоб добавить новый таск
    const addTodo = todo => {
        // Добавляем в список новую задачу с уникальным идентификатором,
        // содержание задачи, статус завершения и статус редактирования.
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    // Функция для переключения статуса завершения задачи
    const toggleComplete = id => {
        // Переключение статуса завершения задачи с указанным идентификатором
        setTodos(todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed} : todo))
    }
    // Function to delete a task
    const deleteTodo = id =>{
        // Удаление задачи с указанным идентификатором из списка
        setTodos(todos.filter(todo => todo.id !== id))
    }


    const editTodo = id => {
        // Переключение статуса редактирования задачи с указанным идентификатором
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        // Обновление содержимого задачи с указанным идентификатором
        // и переключение статуса редактирования
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }
return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        {/* TodoForm component for adding new todos */}
        <TodoForm addTodo={addTodo}/>
        {/* Сопоставление списка задач */}
        {todos.map((todo, index) => (
            // Рендеринг на основе статуса редактирования задачи
            todo.isEditing ? (
                // Отображение EditTodoForm при редактировании задачи
                <EditTodoForm editTodo={editTask} task= 
                {todo} />
            ) : (
                // Отрисовка компонента Todo, когда задача не редактируется
                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
        ))}
    </div>
    )
}