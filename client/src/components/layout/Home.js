import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className='home d-flex flex-column container-fluid'>
        <div className='dark-overlay'>
            <div className='home-inner'>
                <h1 className='xl'> Professional Development </h1>
                <p className='cta'> Learn more, earn more! </p>
                <div className='buttons'>
                    <Link to = '/register' className='btn btn-primary m-2'>Register </Link>
                    <Link to ='/login' className='btn btn-light m-2'> Login </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home