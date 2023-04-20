import React, {useState ,useRef} from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import TodoItem from "./TodoItem.component";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO } from "../redux/actions";
export default function Todo() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const todos = useSelector((state) => {
    return state.todos;
  });



  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const createTodo = () => {
    dispatch({ type: ADD_TODO, payload: { task: task } });
    setTask("");
    inputRef.current.focus();
  };
  return (
    <>
      <InputGroup className="mt-5 mb-3">
        <Form.Control
          placeholder="Type task and press Enter key."
          value={task}
          onChange={handleChange}
          ref={inputRef}/>
        <Button onClick={createTodo}>create todo</Button>
      </InputGroup>
      <p className="mb-2">Todo list</p>
      <div style={{height:"600px",overflowY:'scroll'}}>
      {todos.map((todo) => (
        <TodoItem
          completed={todo.completed}
          task={todo.task}
          key={todo.id}
          id={todo.id}
        ></TodoItem>
      ))}
      </div>
    </>
  );
}
