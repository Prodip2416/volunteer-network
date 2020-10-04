import React from 'react';
import './UserEvent.css';

const UserEvent = ({ task, handleDelete }) => {
    return (
        <div className="col-md-6 mt-3">
            <div className="row single-userEvent">
                <div className="col-md-6">
                    <img src={task.eventImg || "https://i.ibb.co/4mLBPMV/The-Volunteer-network-small-400x400.jpg"} className=" ml-5 mt-3 w-50" alt="img" />
                </div>
                <div className="col-md-6 mt-3">
                    <div className="">
                        <div><h5>{task.eventName}</h5>
                            <p>{(new Date(task.date)).toDateString('dd/MM/yyyy')}</p></div>
                        <div className="text-right">
                            <button className="btn btn-secondary" onClick={() => handleDelete(task._id)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEvent;