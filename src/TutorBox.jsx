import React from "react";

const TutorBox = ({ tutor }) => {
    return (
        <div className="tutor">
            <div>
                <h1>{tutor.Name}
                    <div className="vl">
                    </div>
                    <img src={tutor.Pfp} className="pfp"></img>
                </h1>
            </div>
            <div>
                <h4>{tutor.Course}</h4>
                <p>{tutor.Email}</p>
                <p>{tutor.Phone_Number}</p>
                <p className="biotxt">{tutor.Bio}</p>
            </div>
        </div>
    )
}

export default TutorBox; 