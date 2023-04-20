import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { DELETE_TODO, COMPLETE_TODO } from "../redux/actions";
import { useDispatch } from "react-redux";
export default function TodoItem({ task, completed, id }) {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch({ type: DELETE_TODO, payload: { id: id } });
  };
  const completeTodo = () => {
    if (!completed) dispatch({ type: COMPLETE_TODO, payload: { id: id } });
  };
  return (
    <div
      className={"todo-item"}
      style={{
        backgroundColor: completed
          ? "rgba(0, 175, 38, 0.658)"
          : "rgb(106, 106, 106)",
      }}
    >
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </p>
      <div style={{ display: "flex" }}>
        <Button
          variant="primary"
          style={{ marginRight: "10px" }}
          onClick={() => completeTodo()}
        >
          <AiOutlineCheck />
        </Button>
        <Button variant="danger" onClick={() => deleteTodo()}>
          <AiOutlineDelete />
        </Button>
      </div>
    </div>
  );
}
