import { useState, useEffect } from 'react';
import EmptyData from './EmptyData';
/* import Todo from './Todo'; */
import User from './User';


function App() {

  /* const [todos, setTodos] = useState([]); */
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /* fetch('https://jsonplaceholder.typicode.com/users1/1/todos') */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      /* .then((json) => setTodos(json)) */
      .then((json) => setUsers(json));
  }, []);

  /* if (todos.length === 0) { */
  if (users.length === 0) {
    return (
      <EmptyData />
    );
  }

  return (
    /* <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} />
      ))}
    </div>
  ); */
  <div>
    {users.map((user) => (
      <User key={user.id} name={user.name} />
    ))}
  </div>
  );
}

export default App;