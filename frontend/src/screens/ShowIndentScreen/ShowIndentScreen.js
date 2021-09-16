import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { getAllIndents } from '../../actions/indentActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import IndentCard from '../../components/IndentCard/IndentCard'
import { Link } from 'react-router-dom'
import './showIndentScreen.css'
import { LinkContainer } from 'react-router-bootstrap'

const ShowIndentScreen = () => {
  const [date, setDate] = useState()

  const dispatch = useDispatch()
  const indentGet = useSelector((state) => state.indentGet)
  const { loading, error, indents } = indentGet

  useEffect(() => {
    dispatch(getAllIndents())
  }, [])

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
            indents.map((indent, idx) => (
                <IndentCard id={indent._id} date={formatDate(indent.indentDate)} balance={indent.totalBalance} />
              // <Card key={idx} className="shadow">
              //   <h2>{formatDate(indent.indentDate)}</h2>
              //   <h1>{indent.totalBalance}</h1>
              // </Card>
            ))}
        </div>
      </div>
    </Container>
  )
}

export default ShowIndentScreen
