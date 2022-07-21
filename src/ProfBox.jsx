import React from "react";
import ReactStars from 'react-stars';

const ProfBox = ({ prof }) => {
    return (
        <div className="tutor">
            <div>
                <h1>{prof.Name}
                    <div className="vl">
                    </div>
                </h1>
            </div>
            <div>
                <h4>{prof.Quarter}</h4>
                <ReactStars
                  edit={false}
                  count={5}
                  value={prof.Rating}
                  size={15}
                  color2={'#87CEEB'} />
                <p className="biotxt">{prof.Description}</p>
            </div>
        </div>
    )
}

export default ProfBox;  