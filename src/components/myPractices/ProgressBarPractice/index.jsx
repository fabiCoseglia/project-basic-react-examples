import React from 'react'
import { useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  ProgressBar as BarProgress,
  Form,
  Modal,
} from "react-bootstrap";
import { ProgressBarManual } from "./ProgressBarManual";

export const ProgressBarPractice = () => {
  const [now, setNow] = useState(0);
  const [intervalState, setIntervalState] = useState(null);
  const inputRef = useRef(null);
  const [btnDisable, setBtnDisable] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalFinish, setFinishModal] = useState(false)

  const handleDownload = () => {
    const valueInput = +inputRef.current?.value;
    const isValueValid =
      !isNaN(valueInput) && valueInput > 0 && valueInput <= 100;
    setShowModal(!isValueValid);



    if (intervalState) {
      clearInterval(intervalState);
    }

    if (isValueValid) {
      const interval = setInterval(() => {
        setNow((now) => {
          console.log(now);
          if (now === valueInput) {
            clearInterval(interval);
            setFinishModal(true);
            return now;
            
          }
          return now + 1;
        });
      }, 1000);

      setIntervalState(interval);
      

    } else {
      handleReset();
    }
  };

  const handleReset = () => {
    setNow(0);
    clearInterval(intervalState);
  };

  const handleStop = () =>{
    clearInterval(intervalState);
  }



  const handleChange = ({ target: { value } }) => {
    setBtnDisable(!!!+value);
  };

  const handleClose = () => setShowModal(false);
  const handleCloseModal = () => setFinishModal(false);

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-center">
          <Card style={{ width: "40rem" }} className="m-auto shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <Card.Body>
              <Card.Title>Progress Bar Personalizada</Card.Title>
              <BarProgress
                animated
                now={now}
                label={`${now}%`}
              />

              <ProgressBarManual now={now} label={`${now}%`}/>

              <Form.Control
                ref={inputRef}
                placeholder="Ingresar tiempo de descarga"
                className="my-3"
                onChange={handleChange}
              ></Form.Control>
              <Button
                variant="primary"
                className="mx-1"
                onClick={handleDownload}
                disabled={btnDisable}
              >
                Descargar
              </Button>
              <Button variant="danger" onClick={handleReset}>
                Reiniciar
              </Button>
              <Button variant="dark" onClick={handleStop} className="mx-1">
                Stop
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <h2 className="text-danger text-center py-4">ERROR.. ❌</h2>
            <p className="text-muted fs-4 text-center">
              Solo se acepta valores numéricos. El valor debe ser mayor a 0 y
              menor e igual a 100.
            </p>
          </>
        </Modal.Body>
      </Modal>
      <Modal show={modalFinish} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <h2 className="text-success text-center py-4">Operación exitosa ✔ </h2>

          </>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
