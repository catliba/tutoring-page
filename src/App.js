import React, { useEffect, useState } from "react";
import './App.css';
import TutorBox from "./TutorBox";
import myjson from "./Sample.json";
import myclasses from "./Classes.json";
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import Navbar from "./Navbar.jsx";

const App = () => {
    const [classSelected, setClassSelected] = useState([]);
    const classBank = myjson.tutor.map((tutor) => tutor.Course);
    console.log("classbank", classBank);
    const tutors = myjson.tutor.map((tutor) => tutor);
    console.log("tutors", tutors);    
    let selectedTutors = [];

    const handleChange = (selectedOption) => {
        console.log("handleChange", selectedOption);
        for (let i = 0; i < classBank.length; i++) {
            if (classBank[i] === selectedOption.label) {
                selectedTutors[i] = true;
            }
            else {
                selectedTutors[i] = false;
            }
        }
        console.log("avialble tutors for selected class:", availbleTutors());
        setClassSelected(availbleTutors());
    }
    
    function availbleTutors() {
        let displayTutors = [];
        let displayTutorIndex = 0;
        for (let i = 0; i < selectedTutors.length; i++) {
            if (selectedTutors[i]) {
                displayTutors[displayTutorIndex] = tutors[i];
                displayTutorIndex++;
            }
        }
        return displayTutors;
    }

    const loadOptions = (searchValue, callBack) => {
        setTimeout( () => {
          const filteredOptions = myclasses.filter((option) => 
            option.label.toLowerCase().includes(searchValue.toLowerCase())
          );
          console.log('loadOptions', searchValue, filteredOptions);
          callBack(filteredOptions);
        }, 2000);
    }

    return (
        <div className="title">
            <div><Navbar /></div>
            <div><h1 class="heading">Tutors</h1></div>
            <div className="container" value="select a class">
                <AsyncSelect loadOptions={loadOptions} onChange={handleChange}/>
                {classSelected.map((tutor) => (
                    <TutorBox tutor={tutor}/>
                ))}
            </div>
        </div>
    )
}

export default App;