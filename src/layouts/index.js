import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import github from '../img/github-icon.svg';
import 'bulma';

const Navbar = () => (
  <nav className="navbar is-light">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </div>
       <div className="navbar-start">
        <Link className="navbar-item" to="/faq">
          FAQ
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/a">
          Products
        </Link>
      </div>
      <div className="navbar-start">
       
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/brochure-holders">
          Brochure Holders
        </Link>
      </div>

      <div className="navbar-end">
         <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="4displays" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
