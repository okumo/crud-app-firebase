import React from 'react'
import { Col, Container, Row, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Home = ()=>{
    const history =useHistory()


    return (
        <Container className="p-3">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} onClick={()=>history.push("/form")} >
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Formulario para el control de Pasajeros</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}  onClick={()=>history.push("/qrscaner")}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Registro por Código QR</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}
export default Home;