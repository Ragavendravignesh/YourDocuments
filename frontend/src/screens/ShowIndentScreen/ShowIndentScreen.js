import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { getAllIndents } from '../../actions/indentActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import IndentCard from '../../components/IndentCard/IndentCard'
import Paginate from '../../components/Paginate/Paginate'
import './showIndentScreen.css'

const ShowIndentScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber

  const [date, setDate] = useState()
  const dispatch = useDispatch()

  const indentGet = useSelector((state) => state.indentGet)
  let { loading, indents, page, pages } = indentGet

  const [indentArray, setIndentArray] = useState([])
  const [NotFoundMessage, setNotFoundMessage] = useState()

  const formatDate = (value) => {
    return value.slice(0, value.indexOf('T'))
  }

  useEffect(() => {
    dispatch(getAllIndents(pageNumber))
  }, [dispatch, pageNumber])

  const submitHandler = (e) => {
    e.preventDefault()
    setNotFoundMessage('')

    const searchedValues = indents.filter((indent) => {
      if (formatDate(indent.indentDate) === date) {
        return indent
      }
    })
    {
      !searchedValues.length &&
        setNotFoundMessage(
          "Sorry we couldn't find the indents on the speciifed date, Instead here we display all the indents."
        )
    }
    setIndentArray(searchedValues)
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
        {NotFoundMessage && (
          <Message variant='danger'>{NotFoundMessage}</Message>
        )}
        <div className='display-grid'>
          {!indentArray.length &&
            indents &&
            indents.length &&
            indents.map((indent, idx) => (
              <IndentCard
                key={idx}
                id={indent._id}
                date={formatDate(indent.indentDate)}
                balance={indent.totalBalance}
              />
            ))}
          {indentArray && indentArray.length
            ? indentArray.map((indent, idx) => (
                <IndentCard
                  key={idx}
                  id={indent._id}
                  date={formatDate(indent.indentDate)}
                  balance={indent.totalBalance}
                />
              ))
            : undefined}
        </div>
      </div>

      <Paginate page={page} pages={pages} pageName='/show/indent/page' />
    </Container>
  )
}

export default ShowIndentScreen
