import React from 'react';
import fakeData from '../FakeData';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import checkMark from '../../resources/images/checkMark.png'
import './ClassDetails.css';
import ClassHeader from '../ClassHeader/ClassHeader';
import Footer from '../Home/Footer/Footer';
const ClassDetails = () => {
    const {Id}=useParams();
     const loc=fakeData.find(loc=>loc.id===Id);
    return (
        <>
         <ClassHeader></ClassHeader>
        <div class="container">
           
             <div class='row pr-5 pl-5 pt-5 pb-5'>
                <div class="col-md-6 ">
                
                    <img  src={loc.img} alt="" style={{'height':'300px','width':'300px'}}/>
                    <p class="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error fugiat eos eveniet dolores numquam, inventore quam vero, perferendis, mollitia quibusdam. Aliquid expedita quisquam assumenda qui tenetur at voluptate tempore.Adipisci, quaerat nam alias quia eveniet, ad consequatur possimus accusamus eius eos corporis impedit eligendi mollitia facilis nihil delectus beatae dignissimos. Voluptatibus, eos numquam atque saepe aliquam cum iste ut?</p>
                    <h6><img src={checkMark} alt="" /> Having Slimmer</h6>
                    <h6><img src={checkMark} alt="" /> Getting Stronger</h6>
                    <h6><img src={checkMark} alt="" /> Increased Metabolism</h6>
                    <h6><img src={checkMark} alt="" /> Increased Muscular Endurance</h6>
                    <h6><img src={checkMark} alt="" /> Maximum results in Less Time</h6>
                    <h6><img src={checkMark} alt="" /> Firm Hips and Tummy</h6>
                </div>
                <div class="col-md-5 offset-md-1">
                    <h3><span class="text-warning">CLASS</span> SCHEDULE</h3>
                    <div class="d-flex justify-content-between card-back">
                        <div class="card card1">
                            <h4>Monday</h4>
                            <h6 className="text-warning">8:00 AM - 9:00AM</h6>
                        </div>
                        <div class="card card1">
                            <h4>Tuesday</h4>
                            <h6 class="text-warning">10:00 AM - 11:00AM</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between card-back">
                        <div class="card1 card ">
                            <h5 class="pt-0">Wednesday</h5>
                            <h6 class="text-warning">7:00 AM - 8:00 AM</h6>
                        </div>
                        <div class="card1 card">
                            <h4>Thursday</h4>
                            <h6 class="text-warning">5:00 PM - 6:00 PM</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between card-back">
                        <div class="card1 card">
                            <h4>Friday</h4>
                            <h6 class="text-warning">6:00 AM - 7:00 AM</h6>
                        </div>
                        <div class="card1 card">
                            <h4>Saturday</h4>
                            <h6 class="text-warning">7:00 PM - 8:00 PM</h6>
                        </div>
                    </div>
                    <button className="btn btn-main mt-5">Join Us</button>
                    
                </div>
                
            </div>
           
        </div>
        <Footer></Footer>
        </>
    );
};

export default ClassDetails;