import { useParams } from 'react-router';
import styles from './UserTodos.module.css';
import { useEffect, useState } from 'react';
import { fetchUserTodos } from '../../userService';

export default function UserTodos() {
  const { userId } = useParams();
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTodos() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchUserTodos(userId);
        setTodos(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getTodos();
  }, [userId]);
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>User Todos</h2>
      {isLoading && <b>Loading users...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}

      <ul className={styles.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? styles.completed : styles.pending}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
