import React, { Component } from 'react';
import './Home.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Button } from 'reactstrap';

class Batch extends Component {
  render() {
    return (
      <div className="Hom">
        <Header />
        <body>
        <Button color="primary" className="buton">primary</Button>{' '}
        <p>mmnmnbmnbmnbmnbmnbmnbmnb</p>
        </body>
        <Footer />
      </div>
    );
  }
}

export default Batch;
