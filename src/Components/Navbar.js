import React from 'react'
import logo from '../Assets/gym_5204009.png'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
    return (
        <div className='bg-dark text-light'>
            <div className='container w-75 m-auto'>
                <div className='navbar'>
                    <div className='fw-bold fs-1'><img src={logo} height={'50px'}></img>    Fitzone</div>
                    <div className='d-flex'>
                        <div className='nav-items' onClick={()=>navigate('/')}>Home</div>
                        <div className='nav-items' onClick={()=>navigate('/features')}>Features</div>
                        <div className='nav-items' onClick={()=>navigate('/plans')}>Plans</div>
                        <div className='nav-items' onClick={()=>navigate("/trainers")}>Trainers</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar