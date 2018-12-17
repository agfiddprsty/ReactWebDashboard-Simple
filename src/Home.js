import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import profile from './profile.jpeg'

class Home extends Component {
  render() {
    return (
      <div className="Hom">
        <header className="Hom-header">
            <nav>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PROFILE</a></li>
                <li><a href="#">ABOUT</a></li>
              </ul>
            </nav>
        </header>
        <body className="Hom-body">
          <section id="box-profile">
          <div className="img-profile">
              <div>
                <img src={profile} className="img-profile" alt="profile" />
              </div>
          </div>
          <div class="description">
              <h1>Agfid Danu Prasetyo</h1>
              <p>Front End Maybe</p>
              <a href="#" className="button bg-green">Edit</a>
              <a href="#" className="button border-blue">Resume</a>
          </div>
          <div className="information">
              <div className="data">
                  <p className="field">Availability</p>
                  <p className="text-gray">Full Time</p>
              </div>
              <div className="data">
                  <p className="field">Age</p>
                  <p className="text-gray">16</p>
              </div>
              <div className="data">
                  <p className="field">Location</p>
                  <p className="text-gray">Purwokerto, Indonesia</p>
              </div>
              <div className="data">
                  <p className="field">Years Exprience</p>
                  <p className="text-gray">1</p>
              </div>
              <div className="data">
                  <p className="field">Email</p>
                  <p className="text-gray">agfid11@gmail.com</p>
              </div>
          </div>
      </section>
          <div className="Hom-silabus"> Ini Silabus </div>
          <div className="Hom-batch"> Daftar Batch </div>
          <button type="button" class="btn btn-primary">MULAI TEST</button>
        </body>
        <footer className="Hom-footer">
          <div> ini footer yakan </div>
          <div> copyright FiiD17 </div>
        </footer>
      </div>
    );
  }
}

export default Home;
