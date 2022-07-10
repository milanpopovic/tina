import{ Card, Container, Row, Col }from 'react-bootstrap';
const shopPieces = require('./shopPieces.js')();

export default function Products () {
    return (
            <Container fluid>
             {shopPieces.map(image => 
               <Row key={image.id} className="justify-content-md-center">
                    <Col md='auto'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL+"/img400/"+image.location} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
             )
            }
        </Container>
    )
}