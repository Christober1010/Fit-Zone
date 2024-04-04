import React from "react";
import "./home.css";
import pic1 from "../Assets/1.jpg";
import pic2 from "../Assets/weight-lifting_5557262.png";
import trainer1 from "../Assets/gym.jpeg";
import trainer2 from "../Assets/gym.jpg";
import trainer3 from "../Assets/gymtrianer.jpg";
import bg from '../Assets/quote.jpg'
import Carousel from "./Carousel";

function Home() {
    return (
        <>
            <div className="bg-secondary home-first">
                <div className="container home-inner">
                    <div className="row">
                        <div className="col-6">
                            <div className="w-75 m-auto">
                                <div className="home-heading">FitZone</div>
                                <div className="fs-2 fw-bold text-info">
                                    Shape your body like the way you want it.
                                </div>
                                <div className="fs-3 fw-bold text-light mb-3">
                                    Starts From <span className="fs-1 text-warning">$18/</span>month
                                </div>
                                <button className="btn btn-dark">Join now</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={bg} className="home-bg"/>
                        </div>

                    </div>

                </div>
            </div>

            <div className="bg-light text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="">
                                <div className="home-offer">What we Offer</div>
                                <div className="home-points">
                                    <i className="fa fa-check-circle text-success"></i> Group
                                    Fitness Classes
                                </div>
                                <div className="home-points">
                                    <i className="fa fa-check-circle text-success"></i> Personal
                                    Trainer Sessions
                                </div>
                                <div className="home-points">
                                    <i className="fa fa-check-circle text-success"></i> Indoor
                                    Pool
                                </div>
                                <div className="home-points">
                                    <i className="fa fa-check-circle text-success"></i> Steam Room
                                    and Souna
                                </div>
                                <div className="home-points">
                                    <i className="fa fa-check-circle text-success"></i> Basketball
                                    Court
                                </div>
                                <div className="home-points">
                                    <i className="fa fa-check-circle text-success"></i> Open 24/7
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-5">
                            <div className=" home-img-wrapper">
                            <img src={pic1} height={"800px"} className="home-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark text-light text-center">
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

            <div className="bg-light text-dark mt-5 mb-5">
                <div className="container text-center">
                    <div className="fw-bold fs-1 text-primary">Private Coaching</div>
                    <div className="fw-bold fs-4">Meet Our Trainers</div>
                    <div className="fw-bold">
                        All our personal trainers have over 30 years of experience combined.
                        Each trainer specializes in strength and monbility workouts
                    </div>

                    <div className="row mt-5">
                        <div className="col-4">
                            <img src={trainer1} height={"400px"} />
                        </div>
                        <div className="col-4">
                            <img src={trainer2} height={"400px"} />
                        </div>
                        <div className="col-4">
                            <img src={trainer3} height={"400px"} />
                        </div>
                    </div>

                    <div className="fw-bold fs-4 mt-5 text-success">Free Trial</div>
                    <div className="fw-bold fs-1 text-primary">Get 7 Days Trial</div>
                    <div className="fw-bold">
                        You can work with each trainer for up to 7 days for free in order to
                        see if they are a good fit for your goals.
                    </div>
                </div>
            </div>

            <div className="bg-dark text-light">
                <div className="container text-center p-5">
                    <div className="fw-bold fs-1 text-warning">FitZone Tour <i className="fa fa-camera"></i></div>
                    <iframe
                        className="mt-5"
                        width="914"
                        height="514"
                        src="https://www.youtube.com/embed/1jL99Btp00o"
                        title="LA Fitness Club Tour"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            <div className="">
                    <Carousel/>
            </div>
        </>
    );
}

export default Home;
