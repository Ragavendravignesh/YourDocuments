import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen}/>
          <Route path='/profile' component={ProfileScreen} /> 
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
