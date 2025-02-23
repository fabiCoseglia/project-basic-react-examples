import React from 'react'
import { Button,Col, Container, Row, Toast } from "react-bootstrap";
import { useShow } from "../../../hook/useShow";
import { Contador } from './Contador';

export const Counter = () => {
  const { show, handleShowMessage } = useShow(false);
  
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
          <Button
            className="mb-2"
            variant={show ? "danger" : "success"}
            onClick={handleShowMessage}
          >
            {show ? "Ocultar" : "Mostrar"} contador
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="m-auto mt-2">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Contador React</strong>
            </Toast.Header>
            <Contador/>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
