import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Template } from './Components/mainComponents'
import Header from './Components/Partials/Header'
import Footer from './Components/Partials/Footer'

import Router from './Router'
import './App.css';

function App(props) {
  return (
   <BrowserRouter>
    <Template>
      <Header />
      <Router />
      <Footer />
    </Template>
   </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    user:state.user
  }
}

const mapDispatchToProps = dispath => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
