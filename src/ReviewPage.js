import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './App.css';
import ProfBox from "./ProfBox";
import myjson from "./Sample.json";
import Popup from 'reactjs-popup';


const ReviewPage = () => {
    /*const navigate = useNavigate();
    const navtoapp = () => {
      navigate('/App');
    };*/
    return (
        //<button onClick={navtoapp}>sdfs</button>
        <div className="title">
          <h1>Course Reviews</h1>
          <div className="addrevbutt">

          <Popup trigger={<button> Add Review</button>} modal nested>
          {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> New Review </div>
        <div className="content">
            <span>Professor:</span>
            <input type="text" placeholder="Professor"></input>
            <br></br>
            <span>Course:</span>
            <input type="text" placeholder="Course"></input>
            <br></br>
            <span>Review:</span>
            <textarea placeholder="Review"></textarea>
        </div>
        <div className="actions">
          <button>Submit</button>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}

          </Popup>
          </div>
          <div>
                {myjson.professorReviews.map((prof) => (
                        <ProfBox prof={prof} />
                ))}
            </div>
        </div>
    );
}

export default ReviewPage; 