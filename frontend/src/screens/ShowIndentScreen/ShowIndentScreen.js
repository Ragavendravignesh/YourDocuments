import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../../components/FormContainer'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './showIndentScreen.css'

const ShowIndentScreen = () => {
  const [date, setDate] = useState();

  const dispatch = useDispatch();
  
  const submitHandler = () => {
    console.log('Hi')
  }

  return (
    <Container className='top-spacing'>
      <Form onSubmit={submitHandler}>
        <Row className='justify-content-md-center form-box '>
          <Col>
            <Form.Group>
              <Form.Control
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button type='submit' variant='outline-secondary'>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {date}
        </Col>
      </Row>
    </Container>
  )
}

export default ShowIndentScreen
