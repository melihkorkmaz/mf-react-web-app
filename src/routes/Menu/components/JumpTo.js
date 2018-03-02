import React from 'react';
import ReactDOM from 'react-dom';
var scroll  = require('react-scroll').animateScroll;

const JumpTo = ({ menu }) => {

    const scrollToChanged = (e, a) => {
        var rect =document.getElementById(e.target.value).getBoundingClientRect();
        scroll.scrollTo(rect.top);
    }
    return (
        <div className="card jump-to">
            <div className="card-header card-default">Jump To:</div>
            <div className="card-block" style={{padding : "15px"}}>
                <select className="form-control" onChange={scrollToChanged}>
                    {menu.groups.map((item) => {
                        return <option value={item._id} key={item._id}> 
                            {item.name}
                            </option>
                    })}
                    
                </select>
            </div>
        </div>
    )
}

export default JumpTo;