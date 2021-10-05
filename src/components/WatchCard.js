import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col,Card ,Button} from 'react-bootstrap';


class WatchCard extends Component {
    render() {
        return (
            <div>
                <Row>
                    {this.props.WatchData.map( watch =>{
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
                            <Button variant="primary" toClick={()=>{this.props.addtoFav(watch.name,watch.description,watch.image,watch.toUSD)}}>Add-To-watch-list</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    )})}
                    </Row>
                    
               

            </div>
        )
    }
}

export default WatchCard
