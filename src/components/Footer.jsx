import styles from "./footer.module.css"
export default function Footer({completedTodos, totalTodos}){
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Task: {completedTodos} </span>
      <span className={styles.item}>Total Todos: {totalTodos} </span>
    </div>
  );
}