import React from 'react'
import {Link} from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import {Button} from './Button';
import {BsXDiamondFill} from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import './Pricing.css';



function Pricing() {
    return (
      <IconContext.Provider value={{color:'#fff', size:64}}>
          <div>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire/>
                                </div>
                                <h3>Nissans</h3>
                                <h4> From $5.89</h4>
                                <p>Depending with Destination</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Transaction</li>
                                    <li>Luggage insureed</li>
                                    <li> Limit: 5days</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Mode
                                </Button>
                            </div>
                        </Link>
                       
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill/>
                                </div>
                                <h3>AirPlane</h3>
                                <h4>$58.99</h4>
                                <p>Destination determines</p>
                                <ul className='pricing__container-features'>
                                    <li>98% Safe Travel</li>
                                    <li>Luggage insureed</li>
                                    <li> Limit: 2 Days</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                Choose Mode
                                </Button>
                            </div>
                        </Link>

                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize/>
                                </div>
                                <h3>Bus</h3>
                                <h4>$12.99</h4>
                                <p>Destination Determines</p>
                                <ul className='pricing__container-features'>
                                    <li>95% safeTravel</li>
                                    <li>Luggage insureed</li>
                                    <li>Limit: 1 month</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Mode                               </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
        
    );
}

export default Pricing;
