import React from 'react';


const Form=({setInputText,todos,setTodos,inputText,setStatus})=>{
    const inputTextHandler=event=>{
        setInputText(event.target.value);
    };
    const submitHandler=event=>{
        event.preventDefault();
        setTodos([...todos,{
            text:inputText,
            complete:false,
            id:Math.random()*1000
        }]);
        setInputText("");
    };
    const statusHandler=event=>{
        setStatus(event.target.value);
    };

    return(
        <div>
            <form>
                <input type='text' className='todo-list' onChange={inputTextHandler} value={inputText}/>
                <button className='todo-button' type='submit' onClick={submitHandler}>
                    <i className='fas fa-plus-square'/>
                </button>
                <div className='select'>
                    <select name='todos' className='filter-todo' onChange={statusHandler}>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};
export default Form;