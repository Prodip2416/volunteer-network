import React from 'react';
import './Event.css';

const Event = ({ task, handleAddEvent }) => {
    return (
        <div className="col-md-3">
            <div className="card single-item" onClick={() => handleAddEvent(task._id)}>
                <img src={task.url || "https://i.ibb.co/4mLBPMV/The-Volunteer-network-small-400x400.jpg"} className="card-img-top" alt="img" />
                <div className="card-body title" style={{ backgroundColor: task.bg || '#a0c7ef' }}>
                    <h5 className="text-center">{task.title}</h5>
                </div>
            </div>
        </div>
    );
};

export default Event;