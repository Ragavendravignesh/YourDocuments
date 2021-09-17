import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIndentById } from '../../actions/indentActions'
import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShowSingleIndentScreen = ({ match }) => {
  const indentId = match.params.id
  const indentGetById = useSelector((state) => state.indentGetById)
  const { loading, error, indent } = indentGetById
  const [edit, setEdit] = useState(true)

  const [tenCount, setTenCount] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIndentById(indentId))
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(indent._id)
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    indent && (
      <FormContainer>
          <Row>
            <Col xs={8}>
            <h3 className='form-heading'>Indent Details</h3>
            </Col>
            <Col xs={4}>
                <Link to='/show/indent' className="link-btn">Back</Link>
            </Col>
          </Row>
        
        <Form onSubmit={submitHandler}>
          <Form.Group as={Row} className='mb-3' controlId='tenCount'>
            <Form.Label column xs={7} sm={7} md={6} lg={6}>
              <h5>Ten count</h5>
            </Form.Label>
            <Col xs={5} sm={5} md={6} lg={6}>
              {!edit ? (
                <Form.Control
                  type='text'
                  value={tenCount ? tenCount : indent.tenCount}
                  onChange={(e) => setTenCount(e.target.value)}
                />
              ) : (
                <Form.Label column xs={4} sm={4} md={6} lg={6}>
                  <h5>{indent.tenCount}</h5>
                </Form.Label>
              )}
            </Col>
          </Form.Group>
          {edit && (
            <Button
              onClick={() => {
                setEdit(!edit)
              }}
              className='form-btn'
            >
              Edit
            </Button>
          )}
          {!edit && (
            <Button type='submit' className='form-btn'>
              Update
            </Button>
          )}
        </Form>
      </FormContainer>
    )
  )
}

export default ShowSingleIndentScreen
