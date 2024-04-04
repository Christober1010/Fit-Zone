import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()
    return (
        <div className='bg-dark text-light'>
            <div className='container'>

                <div className='row p-5'>
                    <div className='col'>
                        <div className='fw-bold fs-1'>Fit Zone</div>
                        <div>Luxury Fitness gym</div>
                        <div className='w-75'>10th st, behind the gas station, Miami, FL-USA</div>
                        <div>987-985-8884</div>
                    </div>
                    <div className='col mt-4'>
                        <div  className='fw-bold text-warning fs-5 mb-3'>Quick links</div>
                        <div onClick={()=>navigate('/')}>Home</div>
                        <div onClick={()=>navigate('/features')}>Features</div>
                        <div onClick={()=>navigate('/plans')}>Plans</div>
                        <div onClick={()=>navigate('/trainers')}>Trainers</div>
                    </div>
                    <div className='col mt-4'>
                        <div className='fw-bold text-warning fs-5 mb-3'>Contact us</div>
                        <div>Contact</div>
                        <div>Support</div>
                        <div>Sponsorships</div>
                    </div>
                    <div className='col mt-4'>
                        <div className='fw-bold text-warning fs-5 mb-3'>Membership</div>
                        <div>Features</div>
                        <div>Plans</div>
                        <div>FAQ's</div>
                    </div>
                    <div className='col mt-4'>
                        <div className='fw-bold text-warning fs-5 mb-3'>Social Media</div>
                        <div>Facebook <i className='fa fa-facebook'></i></div>
                        <div>Instagram <i className='fa fa-instagram'></i></div>
                        <div>Twitter <i className='fa fa-twitter'></i></div>
                        <div>Youtube <i className='fa fa-youtube'></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer