import React from 'react'
import { Button,Col, Container, Row, Toast } from "react-bootstrap";
import { useShow } from "../../../hook/useShow";
import informacion from '../../../images/informacion.png';
import chat from '../../../images/chat.png';

export const ShowHideMessageMiPractica = () => {
  const { show, handleShowMessage } = useShow(false);
  
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center mb-3">
          {show ? (
            <img src={chat} alt="" style={{ width: "100px" }} />
          ) : (
            <img src={informacion} alt="" style={{ width: "100px" }} />
          )}
        </Col>
        <Col xs={12} lg={{ span: 6, offset: 3 }} className="text-center">
          <Button
            className="mb-2"
            variant={show ? "danger" : "success"}
            onClick={handleShowMessage}
          >
            {show ? "Ocultar" : "Mostrar"} mensaje
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="m-auto mt-2">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Alert</strong>
              <small>React alert</small>
            </Toast.Header>
            <Toast.Body>Estas viendo un alert!!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
