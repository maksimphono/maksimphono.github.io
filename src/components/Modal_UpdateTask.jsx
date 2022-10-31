import {Modal, Button, ButtonGroup, Form} from "react-bootstrap"
import {useState, React} from "react"
import $ from "jquery"
import UPDATE_task from "../forms/UPDATE_task"

export default function Modal_NewTask(props){
    const onSubmit = event => {
        const title = $("#task_title").val() || props.title;
        const description = $("#task_description").val() || props.description;
        const todoIndex = props.todoIndex;
        UPDATE_task({title, description, todoIndex});
        props.handleShowHide(event);
    }

    return (
        <Modal show={props.show} onHide={props.handleShowHide}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task {props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edit task Title:</Form.Label>
                        <Form.Control id="task_title" controlId="task_title" type="text" placeholder={props.title} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edit task Description:</Form.Label>
                        <Form.Control id="task_description" controlId="task_description" as="textarea" placeholder={props.description} />
                    </Form.Group>
                    <Button type = "submit">Submit</Button>
                    <Button variant = "secondary" onClick={props.handleShowHide}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}