import React from 'react'
import featuresbg from '../Assets/features-bg.jpg'
import man from '../Assets/askmen-coolestgym-th_fmq6.h720.webp'
import pic2 from "../Assets/weight-lifting_5557262.png";


function Plans() {
    return (
        <div>
            <div className=''>
                <div className='features-bg'>
                    <img src={featuresbg} className='features-img' />
                    <div className='features-overlay'></div>
                    <div className='features-heading text-center'>PLANS</div>
                </div>
            </div>
            <div className='bg-light text-dark mb-5 mt-5'>
                <div className='container'>
                    <div className='fw-bolder fs-1 text-center'><span className='border-bot'>Why FitZone ?</span></div>
                    <div className=' fs-5 w-75 m-auto mt-5'>Turn your life around with a membership that fits your life and needs. Whether you’re a fresh beginner or a committed expert, Fitzen memberships are for those who insist on the best.</div>
                    <div className='row'>
                        <div className='col p-3 bg-dark text-light rounded m-5'>
                            <div className='fw-bold fs-2 mb-4 text-primary'>Consistent Results</div>
                            <div>Give your body the attention it's been craving by staying active, consistent, and most importantly, patient. Do the workout to see the results.</div>
                        </div>
                        <div className='col p-3 bg-dark text-light rounded m-5'>
                            <div className='fw-bold fs-3 mb-4 text-primary'>Contagious Enthusiasm</div>
                            <div>Enjoying your workout is only part of the journey with us! Train with the latest fitness technologies and our up to speed health programs crafted for each member. After all, enthusiasm is a language we all speak, why not make it a daily staple?</div>
                        </div>
                        <div className='col p-3 bg-dark text-light rounded m-5'>
                            <div className='fw-bold fs-2 mb-4 text-primary'>Sheer Convenience</div>
                            <div>Fitzen Gym is not your average health club; our membership plans, personal training programs, and the International Passport system gives you the utmost accessibility and satisfaction. Join one to join them all, experience convenience and practicality at its peak.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark text-light'>
                <div className='row p-5 m-5'>
                    <div className='col'>
                        <img src={man} />
                    </div>
                    <div className='col'>
                        <div className='fw-bold fs-1 mt-5'>How to Join ?</div>
                        <div className='fs-5 mt-5'>Apply online or visit your nearest club and activate your Fitzen memberships in minutes to train for the future. Our memberships are your shortcut to your fitness ambitions.</div>
                        <button className='btn btn-success mt-3'>Join Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='container'>
                    <div className='row w-75 m-auto'>
                        <div className='fs-1 fw-bold text-center mb-5'><span className='border-bot'>Membership Benefits</span></div>
                        <div className='col'>
                            <div><i className='fa fa-check-circle text-success'></i> +8000 Group Exercise Classes monthly</div>
                            <div><i className='fa fa-check-circle text-success'></i> International Passport Access to over 200 Clubs</div>
                            <div><i className='fa fa-check-circle text-success'></i> Access to the latest Fitness Innovations & Exclusive Programs</div>
                        </div>
                        <div className='col'>
                            <div><i className='fa fa-check-circle text-success'></i> 1500+ Certified Personal Trainers</div>
                            <div><i className='fa fa-check-circle text-success'></i> Access to Good Vibes App with 400+ Partner Discounts</div>
                            <div><i className='fa fa-check-circle text-success'></i> Basketball Court Access</div>
                        </div>
                        <div className='col'>
                            <div><i className='fa fa-check-circle text-success'></i> Access to 20 Swimming Pools</div>
                            <div><i className='fa fa-check-circle text-success'></i> 2 Getting You Started Personal Training Sessions</div>
                            <div><i className='fa fa-check-circle text-success'></i> Over 50+ Kids Classes</div>
                        </div>

                        <button className='btn btn-success text-center'>Join us</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-dark text-light text-center mt-5">
                    <div className="container p-5">
                        <div className="fw-bolder fs-1 mb-4">VIEW OUR PLANS</div>
                        <div className="text-info fw-bold">
                            Get Started Today and recieve 25% off your first month
                        </div>
                        <div className="row mt-5">
                            <div className="col bg-light text-dark mx-4 my-4 p-5 rounded home-price">
                                <img src={pic2} height={"100px"} />
                                <div className="fw-bold fs-1">Beginner</div>
                                <div className="text-primary fw-bold fs-4">$18/month</div>
                                <div className="text-start">
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Single Club
                                        Access
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Fitness
                                        Assessment
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Basketball Court
                                        Access
                                    </div>
                                    <div>
                                        {" "}
                                        <i class="fa fa-star" aria-hidden="true"></i> One session with
                                        personal trainer Monthly
                                    </div>
                                </div>
                            </div>
                            <div className="col bg-info text-dark mx-2 p-5 rounded home-price">
                                <img src={pic2} height={"100px"} />
                                <div className="fw-bold fs-1">Pro</div>
                                <div className="text-light fw-bold fs-4">$28/month</div>
                                <div className="text-start">
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Beginner
                                        Amenites Included
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Unlimited Club
                                        Access
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Unlimited Group
                                        Exercise
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Unlimited
                                        Tanning
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> 20% off
                                        Supplements & Drinks
                                    </div>
                                </div>
                            </div>
                            <div className="col bg-light text-dark mx-4 my-4 p-5 rounded home-price">
                                <img src={pic2} height={"100px"} />
                                <div className="fw-bold fs-1">VIP</div>
                                <div className="fw-bold text-danger fs-4">$48/month</div>
                                <div className="text-start">
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> All Pro Amenites
                                        Included
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Unlimited Team
                                        Training
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Monthly Progress
                                        Meating
                                    </div>
                                    <div>
                                        <i class="fa fa-star" aria-hidden="true"></i> Personalized
                                        Eating Plan from a Certified Nutritionist
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans