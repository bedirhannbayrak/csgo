import React , { useState } from 'react'
import '../App.css'
import Form from './Form'
import TodoList from './TodoList'

const App = () => {

    const [inputText , setInputText ] = useState('');
    const [todos,setTodos] = useState([])

    return (
        <div className='app'>
            <header>
                <h1>My Todo List </h1>
            </header>
            <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} />
            <TodoList setTodos = {setTodos} todos={todos} />
        </div>
    )
}

export default App
