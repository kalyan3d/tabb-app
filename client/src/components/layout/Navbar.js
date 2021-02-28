import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: {isAuthenticated, loading}, logout }) => {

    const authLinks = (
        <header>
            <nav className="navbar navbar-dark bg-dark py-0">
                <div className="container">
                    <a className="navbar-brand" href="#!"></a>
                    <a className="btn btn-secondary p-2 px-4" onClick={logout}>Sign out</a>
                </div>
            </nav>
            <div className="container">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>                        
                    </li>
                    <li>
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );

    const guestLinks = (
        <header>
            <nav className="navbar navbar-dark bg-dark py-0">
                <div className="container">
                    <Link className="navbar-brand" to="/"></Link>
                    <Link className="btn btn-secondary p-2 px-4" to="/login">Sign in</Link>
                </div>
            </nav>
            <div className="container">
                <p className="text-end">
                    Don't have an account? <Link to="/register" className="btn btn-link pe-0"><strong>CREATE NOW!</strong></Link>
                </p>
            </div>
        </header>
    )
    return (
        <Fragment>
            {!loading && <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>}
        </Fragment>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);
