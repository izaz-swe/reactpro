import { useState } from "react";
import styles from "./form.module.css";
export default function Form({todos, setTodos}){
  const [todo, setTodo] = useState({name: "", done: false});

  function submitTodo(e){
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", done: false});
  }

  return (
    <form className={ styles.todoform } onSubmit={submitTodo}>
        <div className={styles.inputContainer}>
          <input className={ styles.modernInput} onChange={(e)=> setTodo({name:e.target.value, done: false})} placeholder="Enter todo item ..." type="text" value={todo.name}/>
          <button className={styles.modernButton}>Add</button>
        </div>
    </form>
  );
}