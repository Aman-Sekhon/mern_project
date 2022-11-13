import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { PropTypes } from 'prop-types';
import 'react-bootstrap';
import 'bootstrap';

const Navbar = ({ auth: {isAuthenticated, loading}, logout }) => {
  const authLinks = (
    <ul className='items d-flex me-3 mt-2'>
      <li><a onClick={logout} href='#!' className='btn btn-light m-2' > Logout </a></li>
    </ul>
  );

  const guestLinks = (
    <ul className='items d-flex me-3 mt-2'>
      <li><Link to='/register' className='btn btn-light m-2'> Register </Link></li>
      <li><Link to='/login' className='btn btn-light m-2'> Login </Link></li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark container-fluid'>
        <h1>
            <Link to='/'> <i className="fa-solid fa-book-open-reader ms-5"></i> </Link>
        </h1>
        {!loading && (<div>{ isAuthenticated ? authLinks : guestLinks }</div>)}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout }) (Navbar);