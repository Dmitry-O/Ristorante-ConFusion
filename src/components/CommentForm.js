import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleSubmit(values) {
        alert("Current state is: " + JSON.stringify(values));
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Control.select model=".rating" name="rating"
                                    className="form-control ml-3 mr-3">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="username" md={6}>Your Name</Label>
                                <Control.text model=".username" id="username" name="username"
                                    placeholder="Your Name"
                                    className="form-control ml-3 mr-3"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger ml-3"
                                    model=".username"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be less than 16 characters'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={6}>Your Feedback</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control ml-3 mr-3"
                                />
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary" className="ml-3">Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button className="bg-white text-secondary" onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg text-secondary"></span> Sumbit Comment
                </Button>
            </div>
        );
    }
}

export default CommentForm;