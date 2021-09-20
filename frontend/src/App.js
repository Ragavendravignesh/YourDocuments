import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import IndentScreen from './screens/IndentScreen/IndentScreen'
import ShowIndentScreen from './screens/ShowIndentScreen/ShowIndentScreen'
import ShowSingleIndentScreen from './screens/ShowSingleIndent/ShowSingleIndentScreen'
import PreOrderScreeen from './screens/PreOrderScreen/PreOrderScreen'
import ShowAllOrdersScreen from './screens/ShowAllOrdersScreen/ShowAllOrdersScreen'
import ShowMyOrdersScreen from './screens/ShowMyOrdersScreen/ShowMyOrdersScreen'
import ShowUsersScreen from './screens/ShowUsersScreen/ShowUsersScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/indent' component={IndentScreen} />
          <Route path='/show/indent' component={ShowIndentScreen} exact />
          <Route path='/show/indent/page/:pageNumber' component={ShowIndentScreen} exact />
          <Route path='/show/indent/:id' component={ShowSingleIndentScreen} exact/>
          <Route path='/order' component={PreOrderScreeen} />
          <Route path='/show/orders' component={ShowAllOrdersScreen} />
          <Route path='/show/myorders' component={ShowMyOrdersScreen} />
          <Route path='/show/users' component={ShowUsersScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
