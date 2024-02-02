import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"
export default function TodoList({todos, setTodos}){
  return (
    <div className={styles.list}>
      {todos.map((todo)=> <TodoItem key={todo.name} item={todo} todos = {todos} setTodos={setTodos} />)}
    </div>
  );
}