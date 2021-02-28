import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import setAlert from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


export const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword){
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                name,
                email,
                password
            })
        }
    }

    if(isAuthenticated){
        return <Redirect to="/dashboad" />
    }

    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-6 col-sm-8">
                <h1>Create your account</h1>
                    <form onSubmit={e => onSubmit(e)} >
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name*</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={e => onChange(e)} value={name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address*</label>
                            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={e => onChange(e)}  value={email} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password*</label>
                            <input type="password" name="password" className="form-control" id="password" onChange={e => onChange(e)}  value={password} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                            <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" onChange={e => onChange(e)}  value={confirmPassword} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(Register);
