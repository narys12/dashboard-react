import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Sidebar from './Sidebar'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import 'bootstrap/dist/js/bootstrap.js'

const App = () => (
  <div>
    <Sidebar />
    <Navbar />
  </div>
)

export default connect()(App);
