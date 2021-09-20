import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers, deleteUser } from '../../actions/userActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { Table, Button, Container } from 'react-bootstrap'
import Paginate from '../../components/Paginate/Paginate';
import './showUsersScreen.css'

const ShowUsersScreen = ({match}) => {
  const pageNumber = match.params.pageNumber;

  const dispatch = useDispatch()

  const userGetAll = useSelector((state) => state.userGetAll)
  const { loading, error, users, page, pages } = userGetAll

  const userDelete = useSelector((state) => state.userDelete)
  const {
    error: errorDelete,
    success: successDelete,
  } = userDelete

  useEffect(() => {
    dispatch(getAllUsers(pageNumber))
  }, [dispatch, successDelete, pageNumber])

  const deleteHandler = (id) => {
    dispatch(deleteUser(id))
  }
  return (
    <Container style={{ marginTop: '4rem' }}>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {successDelete && (
        <Message variant='success'>User deleted successfully.</Message>
      )}
      {users && (
        <Table striped bordered hover responsive className="table-sm">
          <thead className='table-head'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-user-minus'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Paginate page={page} pages={pages} pageName='/show/users'/>
    </Container>
  )
}

export default ShowUsersScreen
