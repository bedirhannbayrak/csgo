import React, { useState } from 'react'

const Form = ({setStatus, setInputText, inputText, todos, setTodos }) => {

    const [showAlert, setShowAlert] = useState(false)

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        setShowAlert(false)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText.length > 0) {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() * 1000 }
            ]);
            setInputText('');

        }
        else (
            setShowAlert(true)
        )

    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            {
                showAlert ? (
                    <div className='alert' style={{ display:"flex" , aligItem:"center" , justifyContent:'center' , paddingBottom:"1rem" ,color:"red"}}>
                        <h3>
                            Please fill the blank
                        </h3>
                    </div>
                ) : null
            }

        </>
    )
}

export default Form
