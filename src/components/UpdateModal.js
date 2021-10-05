import React, { Component } from 'react'

export class UpdateModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showUpdateModal} onHide={this.props.handleDisplayUpdateModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>update watch</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={()=>{this.props.handleUpdate}}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter watch title" name='watchName' defaultValue={this.props.selectedWatchUpdate.name} />

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" name='watchDesc' defaultValue={this.props.selectedWatchUpdate.description} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>image</Form.Label>
                                <Form.Control type="text" placeholder="image" name='watchImage' defaultValue={this.props.selectedWatchUpdate.image}  />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Control type="text" label="price to USD" name='watchToUSD' defaultValue={this.props.selectedWatchUpdate.toUSD}  />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default UpdateModal
