import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col,Card ,Button} from 'react-bootstrap';



class FavCard extends Component {
    render() {
        return (
            <div>
                <Row>
                    {this.props.FavData.map( watch =>{
                        return (
                        <Col>
                         <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={watch.image} />
                        <Card.Body>
                            <Card.Title>{watch.name}</Card.Title>
                            <Card.Text>
                               Description:{watch.description} 
                            </Card.Text>
                            <Card.Text>
                               Price: {watch.toUSD}
                            </Card.Text>
                            <Button variant="danger" toClick={()=>{this.props.deleteFav(watch._id)}}>Delete watch</Button>
                            <Button variant="primary" toClick={()=>{this.props.handleDisplayUpdateModal(watch)}}>update watch</Button>

                        </Card.Body>
                    </Card>
                    </Col>
                    )})}
                    </Row>
                    
               

            </div>
        )
    }
}

export default FavCard
