import React,{useState,useEffect} from "react";
import Form from "./Componenets/Form";
import TodoList from "./Componenets/TodoList";

function App() {

    const [inputText,setInputText]=useState("");
    const [todos,setTodos]=useState([]);
    const [status,setStatus]=useState('all');
    const [filteredTodos,setFilteredTodos]=useState([]);
    const filterHandler=()=>{
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo=>
                    todo.completed === true
                ));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo=>todo.completed===false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    const saveLocalTodos=()=>{
        localStorage.setItem("todos",JSON.stringify( todos));
    };
    const getLocalTodos=()=>{
        if(localStorage.getItem("todos")===null){
            localStorage.setItem("todos",JSON.stringify([]));
        }else{
         let todoLocal=JSON.parse( localStorage.getItem("todos"));
         setTodos(todoLocal);
        }
    };
    useEffect(()=>{
        getLocalTodos();
    },[]);
    useEffect(()=>{
        filterHandler();
        saveLocalTodos();
    },[todos,status]);

    return (
    <div className="App">

        <header>
            <h1>Elarbawy's Todo List</h1>
        </header>
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}
        setStatus={setStatus} />
        <TodoList todos={todos} setTodos={setTodos} status={status} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
