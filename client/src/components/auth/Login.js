import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

export const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/user" />;
  }

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Fragment>
      <div className="row justify-content-center align-items-center">
        <div className="col-4 col-sm-6 col-md-6">
          <div className="row">
            <h1 className="mb-3">Sign into your account</h1>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                required
                aria-describedby="emailHelp"
                onChange={(e) => onChange(e)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                required
                id="password"
                onChange={(e) => onChange(e)}
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
