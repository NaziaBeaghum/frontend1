import React, { useState } from "react";
import logo from './icon-star.svg'
import plus from './icon-plus.svg'
import image from './background-pattern-mobile.svg'
import minus from './icon-minus.svg'
import { data } from "./data2";

import './App.css'
const Home=()=>
{
  const [content,setContent]=useState(data)
  const[sign1,setSign1]=useState(true)
  const[sign2,setSign2]=useState(true)
  const[sign3,setSign3]=useState(true)
  const[sign4,setSign4]=useState(true)
  
return(
   <div className="home_container"> 
   {/* <div className="mobile_img">
    <img src={image} alt=""/>
   </div> */}
    <div className="home_content">
      <div className="faq">
        <img src={logo} alt="" width="25px"></img>
        <h3>FAQs</h3>
      </div>

        <div className="first_ques_block">
          <div className="question">
             <p>What is Frontend Mentor, and how will it help me? </p>
            { sign1&&<img src={plus} alt="" onClick={()=>setSign1(!sign1)}/>}
            {! sign1&&<img src={minus} alt="" onClick={()=>setSign1(!sign1)}/>}
            </div>
          {!sign1&&<p className="answers"> Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels 
            and ideal for portfolio building..</p>}   
        </div>

        <div className="second_ques_block">
         <div className="question">
               <p>Is Frontend Mentor free?</p>
            { sign2&&<img src={plus} alt="" onClick={()=>setSign2(!sign2)}/>}
             {! sign2&&<img src={minus} alt="" onClick={()=>setSign2(!sign2)}/>}
         </div>
       {!sign2&&<p className="answers">Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels. </p>}   
       </div>

        <div className="third_ques_block">
        <div className="question">
        <p>What is Frontend Mentor, and how will it help me? </p>
        { sign3&&<img src={plus} alt="" onClick={()=>setSign3(!sign3)}/>}
        {! sign3&&<img src={minus} alt="" onClick={()=>setSign3(!sign3)}/>}
        </div>

        {!sign3&&<p className="answers"> Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels 
        and ideal for portfolio building..</p>}   
        </div>

          <div className="fourth_ques_block">
          <div className="question">
          <p>What is Frontend Mentor, and how will it help me? </p>
          { sign4&&<img src={plus} alt="" onClick={()=>setSign4(!sign4)}/>}
          {! sign4&&<img src={minus} alt="" onClick={()=>setSign4(!sign4)}/>}
          </div>

          {!sign4&&<p className="answers"> Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels 
          and ideal for portfolio building..</p>}   

          </div>

      
    </div>

   </div>
)
}
export default Home