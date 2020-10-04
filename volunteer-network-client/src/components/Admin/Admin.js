import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddEvent from './AddEvent';
import './Admin.css';
import RegisterList from './RegisterList';

const Admin = () => {
    const [showVolunteerList, setShowVolunteerList] = useState(true);

    return (
        <div className="admin">
            <div className="row mt-2">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/">
                                <img src="https://i.ibb.co/7r5h4KD/Group-1329.png" className="w-50 mt-3" alt="img" />
                            </Link>
                        </div>
                        <div className="col-md-6">
                            {
                                showVolunteerList ? <h3 className="mt-4">Volunteer register list</h3>
                                    : <h3 className="mt-4">Add Event</h3>
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <main>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <ul>
                            <li className={showVolunteerList ? 'm-3 active' : 'm-3'} onClick={() => setShowVolunteerList(true)}>
                                <img className="img" src="https://i.ibb.co/bdszP9S/users-alt-1.png" alt="" /> Volunteer register list
                            </li>
                            <li className={showVolunteerList ? 'm-3' : 'm-3 active'} onClick={() => setShowVolunteerList(false)}>
                                <img className="img" src="https://i.ibb.co/nCVkXZW/plus-1.png" alt="" /> Add Event
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9 user-list">
                        {showVolunteerList ? <RegisterList /> : <AddEvent />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Admin;