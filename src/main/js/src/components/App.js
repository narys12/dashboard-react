import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'react-metismenu/dist/react-metismenu-standart.css'

import 'bootstrap/dist/js/bootstrap.js'

const App = () => (
  <div>
    <Navbar />
  </div>
)

export default connect()(App);
