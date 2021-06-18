import React from "react";
import logo from "./../../assets/images/tabb_logo.svg";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="logo m-auto">
          <img src={logo} alt="The Artist Blue Book Logo" />
        </div>
      </div>
      <div className="row mb-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link text-black-50" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black-50" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black-50" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Artists by  College / Medium / Place"
                aria-label="Search Artists by  College / Medium / Place"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-secondary"
                type="button"
                id="button-addon2"
                disabled
              >
                <i className="icofont-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
