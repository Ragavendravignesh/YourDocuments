import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { getAllIndents } from '../../actions/indentActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import './showIndentScreen.css'

const ShowIndentScreen = () => {
  const [date, setDate] = useState();

  const dispatch = useDispatch();
  const indentGet = useSelector(state => state.indentGet);
  const { loading, error, indents } = indentGet

  useEffect(() => {
    dispatch(getAllIndents());
  },[])

  const submitHandler = () => {
    console.log('Hi')
  }

  const formatDate = (value) => {
    return value.slice(0, value.indexOf('T'));
  }

  return (
    <Container className='top-spacing'>
      <Form onSubmit={submitHandler}>
        <Row className='form-box '>
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
            <Button type='submit' variant='outline-light'>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {loading && <Loader/> }
          {error && <Message variant='danger'>{error}</Message>}
          {console.log(indents)}
          {indents && indents.length && indents.map((indent, idx) => (
            <Card key = {idx}>
              <h1>{indent.totalBalance}</h1>
              <h2>{formatDate(indent.indentDate)}</h2>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default ShowIndentScreen
