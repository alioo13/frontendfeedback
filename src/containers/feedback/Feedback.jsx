import React, { useEffect, useState } from "react";

import './feedback.css';
import SolaVieve from '../../assets/SolaVieve.png';
import { Modal } from "../../Components/Modal";
import Axios from 'axios';





function Feedback() {

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);
  const url = "http://localhost:5000/api/v1/feedbacks";
  const [value, setvalue] = useState({
    star1:"",
    star2: "",
    star3:"",
    feedback:"",
  });


  const handlefedbackinput = (e) =>{
    setvalue({...value, feedback: e.target.value})
  }

  const handlestar1input = (e) =>{
    setvalue({...value, star1: e.target.value})
  }

  const handlestar2input = (e) =>{
    setvalue({...value, star2: e.target.value})
  }

  const handlestar3input = (e) =>{
    setvalue({...value, star3: e.target.value})
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {rate_experience: value.star1,
          payment_satisfaction: value.star2,
          customer_service_satisfaction : value.star3,
          comment: value.feedback};
    console.log(data);
    Axios.post(url,data)
    .then((res) => {
      console.log(res);
    })
    setShow(true);
    setvalue({...value, feedback: "",star1:"",star2:"",star3:""})

 
  }
  console.log(handleSubmit);

  return (
    
    <div className='containerglob'>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }

   
      <div className='sola'>
        <img src={SolaVieve} alt="SolaVieve" /></div>


      <hr class="hrnrml" />
      <div className='feedleave'> <h2>Leave a feedback!</h2></div>
      <div>   
    </div>
      
    {show ? <div><Modal show={show} close={closeModalHandler} /></div> : null}
      <form onSubmit={handleSubmit} >
      


        <label name="rate1">
          <div className='rateexp'>  <p> Rate your experience from 0 to 5 stars: </p></div>
        </label>
        <div className='centerradio'>
          <div class="stars1">
            
            <input type="radio" id="teen" name="rate1" checked={value.star1 === '5'} onChange={handlestar1input}  value="5" />
            <label for="teen"></label>
            <input type="radio" id="nine" name="rate1"  checked={value.star1 === '4'} onChange={handlestar1input} value="4" />
            <label for="nine"></label>
            <input type="radio" id="eghit" name="rate1"  checked={value.star1 === '3'} onChange={handlestar1input} value="3" />
            <label for="eghit"></label>
            <input type="radio" id="seven" name="rate1"  checked={value.star1 === '2'} onChange={handlestar1input} value="2" />
            <label for="seven"></label>
            <input type="radio" id="six" name="rate1"   checked={value.star1 === '1'} onChange={handlestar1input} value="1" />
            <label for="six"></label>

          </div>
        </div>


        <hr class="stylehr" />
        <label name="rate2">

          <div className='rateexp'>  <p> How satisfied you with the payment process?</p></div>
        </label>
        <div class="centerradio">
          <div class="stars2">
            <input type="radio" id="fifteen" name="rate2" checked={value.star2 === '5'} onChange={handlestar2input} value="5" />
            <label for="fifteen"></label>
            <input type="radio" id="fourteen" name="rate2" checked={value.star2 === '4'} onChange={handlestar2input} value="4" />
            <label for="fourteen"></label>
            <input type="radio" id="therteen" name="rate2" checked={value.star2 === '3'} onChange={handlestar2input} value="3" />
            <label for="therteen"></label>
            <input type="radio" id="twelev" name="rate2" checked={value.star2 === '2'} onChange={handlestar2input} value="2" />
            <label for="twelev"></label>
            <input type="radio" id="eleven" name="rate2" checked={value.star2 === '1'} onChange={handlestar2input} value="1" />
            <label for="eleven"></label>

          </div>
        </div>


        <hr class="stylehr" />

        <label name="rate">
          <div className='rateexp'>  <p> How satisfied are you with our customer service?</p></div>
        </label>
        <div class="centerradio">
          <div class="stars">
            <input type="radio" id="five" name="rate" checked={value.star3 === '5'} onChange={handlestar3input} value="5" />
            <label for="five"></label>
            <input type="radio" id="four" name="rate" checked={value.star3 === '4'} onChange={handlestar3input} value="4" />
            <label for="four"></label>
            <input type="radio" id="three" name="rate" checked={value.star3 === '3'} onChange={handlestar3input} value="3" />
            <label for="three"></label>
            <input type="radio" id="two" name="rate" checked={value.star3 === '2'} onChange={handlestar3input} value="2" />
            <label for="two"></label>
            <input type="radio" id="one" name="rate" checked={value.star3 === '1'} onChange={handlestar3input}  value="1" />
            <label for="one"></label>

          </div>
        </div>


        <hr class="stylehr1" />


        <label for="comments">
          <div className='rateexp'>  <p> Please leave a comment about your experience below :</p></div>
        </label>
        <textarea cols="80" rows="8" id="comments" 
        onChange={handlefedbackinput}
        value={value.feedback}
        name="comments" 
        required= "true"
        placeholder="Type your comment here !"></textarea>
        
        <div>
        <button  className="buttondesing" type="submit">
        SEND FEEDBACK
        </button>
  
        </div>
      </form>
      
    </div>

  );
}

export default Feedback;

