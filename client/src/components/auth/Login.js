import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({login, isAuthenticated}) => {
    const [formData, updateFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChange = e => updateFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();
        // console.log('Awesome!');
        login({email, password});
    };

    if(isAuthenticated){
        return <Navigate to='/welcome' />;
    }

    return (
        <div className='login'>
            <h1 className='large text-primary'><strong> Log In </strong></h1>
            <p className='cta'> <i class="fa-solid fa-arrow-right-to-bracket"></i> Log in to your account </p>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input type='email' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} required />
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} minLength='4' required />
                </div>
                <input type='submit' className="btn btn-primary" value='Login' />
            </form>
            <p className='m'>
                Not registered yet? <Link to='/register'> Register now </Link>
            </p>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login}) (Login);