import React from 'react';
import Accordion from "react-bootstrap/Accordion"
import {Button, Container} from "react-bootstrap"
import TodoScene from "./todo"
import "../../../css/style.css"

export default function TodosScene(props){
    return (
        <Container>
            <h1 className="display-4 d-flex m-auto mt-3">{props.todos.length && "You currently have these task to do:" || "You don't have tasks now, relax"}</h1>
            <Accordion className="todos-accordion mt-3" defaultActiveKey="0">
                {props.todos.map((todo, i) => 
                    <TodoScene
                        key = {i}
                        _key = {i}
                        title = {todo.title}
                        date = {todo.date} 
                        description = {todo.description}
                        handleCompleteTask = {props.handleCompleteTask}
                        handleEditTask = {props.handleEditTask}
                        handleDeleteTask = {props.handleDeleteTask} 
                    />
                )}
            </Accordion>
            <Button id = "new_task" variant = "light" onClick={props.handleNewTask}>+ New</Button>
        </Container>
    );
}