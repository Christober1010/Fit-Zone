import React from 'react'
import featuresbg from '../Assets/features-bg.jpg'
import training1 from '../Assets/470333845-56a2b67c5f9b58b7d0cdadd3.jpg'
import training2 from '../Assets/photo-1536922246289-88c42f957773.avif'
import trainer1 from "../Assets/gym.jpeg";
import trainer2 from "../Assets/gym.jpg";
import trainer3 from "../Assets/gymtrianer.jpg";

function Trainers() {
  return (
    <div>
      <div className='features-bg'>
        <img src={featuresbg} className='features-img' />
        <div className='features-overlay'></div>
        <div className='features-heading text-center'>TRAINERS</div>
      </div>
      <div className='bg-light text-dark mt-5 mb-5'>
        <div className='fw-bold fs-1 text-center'><span className='border-bot'>Why FitZone Personal Trainers?</span></div>
        <div className='w-75 m-auto mt-3 fs-4'>Our trainers will develop a personalized training program that fits your body, lifestyle and budget. They are certified experts in exercise physiology, anatomy, training program development, fitness assessments and applications. They excel at applying this knowledge to help you achieve your goal and go further in life.</div>
        <div className='container'>
          <div className='row mt-5 p-5'>
            <div className='col-7'>
              <img src={training1} height={'400px'} />
            </div>
            <div className='col-5'>
              <div className='fw-bold fs-1'>Welcome to Personal Training by Fitzen</div>
              <div className=''>Fitzen Personal Trainers are highly qualified and take pride in treating every member as an individual. We understand that different training methods suit different people so no matter what your level of fitness or experience, a Personal Trainer can tailor a program, show you best training practices and how to use gym equipment, inspiring and motivating you along the way.
                <div className='mt-2'>We have trainers who specialize in all areas of fitness including weight loss, injury rehabilitation, sports training, core and strength training. Working with a Personal Trainer is no doubt the fastest and safest way to get the results you want.</div>
              </div>
              <div className='fw-bold mt-4'>For best results, choose Personal Training by Fitzone.</div>
              
            </div>
          </div>
        </div>

        <div className='container mt-5'>
        <div className='fw-bold fs-1 text-center'><span className='border-bot'>Why Personal Trainers?</span></div>
          <div className='row mt-5'>
            <div className='col'>
              <img src={training2}/>
            </div>
            <div className='col'>
              <div className='fw-bold fs-1'>Benefits</div>
              <div>Results made personal! Get the results you want with professional, passionate and highly qualified experts who take your goals and aspirations personally.</div>
              <div>Our trainers are all graduates of the Fitness First Asia Personal Training Foundation Programme where their know-how is reviewed, updated and assessed.</div>
            </div>
          </div>
        </div>

        <div className='container'>
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
        </div>
      </div>

    </div>
  )
}

export default Trainers