import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {Chart} from 'react-google-charts';

export default function Counter() {
  const todos = useSelector((state) => {
    return state.todos;
  });
  let completed = 0,
    todo = 0,
    total = 0;
  total = todos.length;
  todos.forEach(todo => {
    completed += todo.completed ? 1 : 0;
  });
  todo = total - completed;
  return (
    <>
      Task Chart
      <Row>
        <Col lg={4}>completed : {completed}</Col>
        <Col lg={4}>todo : {todo}</Col>
        <Col lg={4}>total : {total}</Col>
      </Row>
      <Chart style={{backgroundColor:'transparent'}}
       chartType="PieChart"
       data={[['Task', 'Hours per Day'],
       [`Todo (${todo})`,     todo],
       [`Completed (${completed})`,completed],
]}
       width="100%"
       height="400px"
       legendToggle></Chart>
    </>
  );
}
