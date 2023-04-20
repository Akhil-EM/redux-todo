import './App.css';
import React from "react";
import {Row,Col } from "react-bootstrap";
import Counter from "./componets/Counter.component";
import Todo from "./componets/Todo.component";
import store from './redux/store';
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
    <div  style={{ backgroundColor:"#282c34",color:"#fff",height:'100vh',padding:'15px'}}>
       <Row>
         <Col  lg={6}>
           <Todo/>
         </Col>
         <Col  lg={6}>
           <Counter/>
         </Col>
       </Row>
    </div>
    </Provider>
  );
}

export default App;
