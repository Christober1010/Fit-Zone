import React from 'react'
import man1 from '../Assets/istockphoto-1317804584-612x612.jpg'
import man2 from '../Assets/istockphoto-1153955734-170667a.webp'
import man3 from '../Assets/young-bearded-man-with-striped-shirt_273609-5677.avif'

function Carousel() {
    return (
        <div className='bg-secondary text-dark p-5'>
            <div className='fw-bold fs-1 text-warning text-center'>REVIEWS</div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active text-center">
                        <img src={man1} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                        <div className='fw-bold fs-1 text-light'>MARC FERGUSON</div>
                        <div className='w-50 m-auto'>I love Fitzen Gym and the people who work there. It is a very clean gym. Equipment is always operable depending on which location you go to.</div>
                    </div>
                    <div class="carousel-item text-center">
                        <img src={man2} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                        <div className='fw-bold fs-1 text-light'>MARC FERGUSON</div>
                        <div className='w-50 m-auto'>I love Fitzen Gym and the people who work there. It is a very clean gym. Equipment is always operable depending on which location you go to.</div>
                    </div>
                    <div class="carousel-item text-center">
                        <img src={man3} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                        <div className='fw-bold fs-1 text-light'>MARC FERGUSON</div>
                        <div className='w-50 m-auto'>I love Fitzen Gym and the people who work there. It is a very clean gym. Equipment is always operable depending on which location you go to.</div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel