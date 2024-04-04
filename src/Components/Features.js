import React, { useState } from 'react'
import './features.css'
import featuresbg from '../Assets/features-bg.jpg'
import pic1 from '../Assets/gym-exterior.jpg'
import pic2 from '../Assets/gym-interior.jpg'
import pic3 from '../Assets/gym-interior2.jpg'
import pic4 from '../Assets/gym-interior3.jpg'
import pic5 from '../Assets/gym-interior4.jpg'
import pic6 from '../Assets/gym-interior5.jpg'
import pic7 from '../Assets/gym-interior6.jpg'
import pic8 from '../Assets/gym-interior7.jpg'

function Features() {
    const data = [
        {
            id: "1",
            heading: "Circuit Training",
            content: ["Utility Benches, Exercise Mats, Medicine Balls, Wall Balls & Slam Balls",
                "Plyo Boxes, Suspension, Resistance Bands, Stability Balls, Battle Rope & Cones",
                "Agility Ladder, Sand Bags, Jump Ropes, Tires & Sledge Hammers"]
        },
        {
            id: "2",
            heading: "Mobility",
            content: ["PVC’s, Foam Rollers & PVC Rollers",
                "Lacrosse Balls, Stick Rollers & Body Tempering",
                "Car Deadlift, Basket Deadlift & Several Stone Loading Tables"]
        },
        {
            id: "3",
            heading: "POWERLIFTING",
            content: ["Westside Reverse Hyper, Metal Militia Competition Bench, Elite FTS Monolift & ETE Glute/Ham",
                "Multiple ETE Power Racks and 8 Post Cross Training Rig with Monkey Bars, Texas Squat Bar & Texas Deadlift Bar",
                "Rogue Cambered Squat Bar, ETE Safety Squat Bar, Westside Safety Squat Bar, Transformer Bar",
                "Cambered Bench Bar, Cambered Squat bar, Bamboo Bar, Perform Better Swiss Bar, Over 200lbs in Chains"]
        },
        {
            id: "4",
            heading: "GENERAL",
            content: ["Ivanko KG Steel Plates, Chalk & Many Specialty Barbells",
                "Seated Leg Curl, Standing Leg Curl, Prone Leg Curl & Maxicam plate loaded leg extension/leg curl",
                "Triceps Machine, Pulldown/ Row, Fly Machine, Iron Cross Machine, T-Bar Bent Over Row, EliteFTS T-Bar Chest Supported Row & Standing Calf Raise/ Shoulder Press",
                "Seated Calf Raise, Ader Tibia Dorsi Calf Machine, Plate Loaded Iso Unilateral Dip Machine, Plate Loaded Iso Unilateral Incline Press Machine, Plate Loaded Iso Unilateral Shoulder Press Machine, Jammer",
                "ConesSpeed Ladder, Microwave, Jump Ropes, Rings & Mats"]
        }
    ]

const [show,setShow]=useState(false);
const [selected,setSelected]=useState(null)

const handleSelection=(id)=>{
    // console.log(id)
    setSelected(id===selected ? null:id )
    

}
    return (
        <div>
            <div className='features-bg'>
                <img src={featuresbg} className='features-img' />
                <div className='features-overlay'></div>
                <div className='features-heading text-center'>FEATURES</div>
            </div>
            <div className='bg-light text-dark mb-5'>
                <div className='container w-75 '>
                    <div className='features-offer mb-5'><span className='border-bot'>What We Offer</span></div>
                    <div className='fs-4'>Effective <span className='highlight'>“Old School”</span> equipment, not fancy, popular, or trendy.</div>
                    <div className='fs-4'>We have everything you need for an amazing body transformation!</div>
                    <div className='fs-4'>We specialize in providing the equipment and coaching for <span className='highlight'>Strongman</span> , <span className='highlight'>Powerlifting</span>, <span className='highlight'>Olympic Weightlifting</span>, and <span className='highlight'>Arm Sports</span></div>
                </div>
                <div>
                    <div className='container w-75 m-auto mt-5'>
                        <div className='features-offer'><span className='border-bot'>GALLERY <i className='fa fa-camera'></i></span></div>
                        <div className='fs-4'>Take a tour around our facility...</div>
                        <div className='fs-4'>By looking through our gallery, you can see what you'll find at FitZone Gym. There's lots of equipment to check out and plenty of friendly faces too!</div>
                    </div>
                </div>
            </div>
            <div className='bg-dark p-5'>
                <div className='container'>
                    <div >
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active text-center">
                                    <img src={pic1} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                                </div>
                                <div class="carousel-item text-center">
                                    <img src={pic2} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                                </div>
                                <div class="carousel-item text-center">
                                    <img src={pic3} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                                </div>
                                <div class="carousel-item text-center">
                                    <img src={pic4} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                                </div>
                                <div class="carousel-item text-center">
                                    <img src={pic5} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                                </div>
                                <div class="carousel-item text-center">
                                    <img src={pic6} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                                </div>
                                <div class="carousel-item text-center">
                                    <img src={pic7} class="d-block w-50 m-auto" alt="..." height={'450px'} />
                                </div>
                                <div class="carousel-item text-center">
                                    <img src={pic8} class="d-block w-50 m-auto" alt="..." height={'450px'} />
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
                </div>
            </div>
            <div className='bg-light text-dark p-5'>
                <div className='text-center fw-bolder fs-1'>Trainings Available</div>
                <div className='w-50 m-auto container'>
                {
                    data.map((item) => {
                        return <div className=''>
                        <div className='fw-bold fs-4 border p-4 my-2 bg-dark text-light' onClick={()=>handleSelection(item.id)}>{item.heading}    <i className='fa fa-angle-down'></i></div>
                        {
                            selected===item.id?<div className='mb-2 bg-dark text-warning p-4 border'>
                            {item.content.map((list)=><div> <i className='fa fa-check-circle'></i> {list}</div>)}
                        </div>:""
                        }
                        
                    </div>
                    })
                }
                </div>
                
                
            </div>

        </div>
    )
}

export default Features