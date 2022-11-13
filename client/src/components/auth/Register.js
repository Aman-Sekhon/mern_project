import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import {PropTypes} from 'prop-types';
import './Register.css';

const Register = ({ register }) => {
    const [formData, updateFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpw: ''
    });

    const {name, email, password, confirmpw} = formData;

    const onChange = e => updateFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        if(password !== confirmpw){
            console.log('Passwords must match');
        } else {
            // console.log(formData);
            register({name, email, password});
        }
    }

    return (
        <div className='register'>
            <h1 className='large text-primary'> <strong>Register</strong> </h1>
            <p className='cta'> <i className="fa-solid fa-address-card"></i> Specify your account info </p>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input type='text' placeholder='Name' name='name' value={name} onChange={e=> onChange(e)} required />
                </div>
                <div className='form-group'>
                    <input type='email' placeholder='Email Address' name='email' value={email} onChange={e=> onChange(e)} required />
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Password' name='password' value={password} onChange={e=> onChange(e)} minLength='4' required />
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Confirm Password' name='confirmpw' value={confirmpw} onChange={e=> onChange(e)} minLength='4' required />
                </div>
                <input type='submit' className="btn btn-primary" value='Register' />
            </form>
            <p className='m'>
                Already have an account? <Link to='/login'> Log In </Link>
            </p>
        </div>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
};

export default connect(null, {register})(Register);