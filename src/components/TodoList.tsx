import React from "react";
import { TodoListItem } from './TodoListItem';
import Cookies from 'js-cookie';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  // const todos = Cookies.get('todo');
  return (
    <ul>
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
     ))}
    </ul>
  );
};