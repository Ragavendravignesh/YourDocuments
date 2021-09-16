import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { getAllIndents } from '../../actions/indentActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import IndentCard from '../../components/IndentCard/IndentCard'
import './showIndentScreen.css'

const ShowIndentScreen = () => {
  const [date, setDate] = useState()

  const dispatch = useDispatch()
  const indentGet = useSelector((state) => state.indentGet)
  const { loading, error, indents } = indentGet

  useEffect(() => {
    dispatch(getAllIndents())
  }, [dispatch])

  const submitHandler = () => {
    console.log('Hi')
  }

  const formatDate = (value) => {
    return value.slice(0, value.indexOf('T'))
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
      <div style={{ marginTop: '1rem' }}>
        {loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
        <div className='display-grid'>
          {indents &&
            indents.length &&
            indents.map((indent) => (
              <IndentCard
                id={indent._id}
                date={formatDate(indent.indentDate)}
                balance={indent.totalBalance}
              />
            ))}
        </div>
      </div>
    </Container>
  )
}

export default ShowIndentScreen
