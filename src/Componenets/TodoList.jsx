import React from 'react';
import Todo from "./Todo";


const TodoList=({todos, setTodos,filteredTodos})=>{
    return(<div>
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map(todo=>(
                  <Todo todo={todo}
                        todos={todos}
                        text={todo.text}
                        key={todo.id}
                        setTodos={setTodos}
                  />
                ))}
            </ul>
        </div>
    </div>);
};
export default TodoList;