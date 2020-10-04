import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './CreateAccount.css';
import NotFound from '../NotFound/NotFound';
import { UserContext } from '../../App';
const CreateAccount = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({})
    const [volunteer, setVolunteer] = useState({ fullName: '', email: '', date: '', description: '', eventName: '', eventImg: '' });
    const [eventName, setEventName] = useState('');
    const [eventImg, setEventImg] = useState('');
    const [loggedInUser] = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/events/' + id)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                setEventName(data.title);
                setEventImg(data.url);
            })
    }, [id]);

    const handleChange = (e) => {
        const newVolunteer = { ...volunteer };
        newVolunteer[e.target.name] = e.target.value;
        setVolunteer(newVolunteer);
    }

    const handleSubmit = (e) => {
        const newVolunteer = { ...volunteer };
        newVolunteer.fullName = loggedInUser.displayName;
        newVolunteer.email = loggedInUser.email;
        newVolunteer.eventName = eventName;
        newVolunteer.eventImg = eventImg;

        fetch('http://localhost:5000/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/event');
                }
            })

        e.preventDefault();
    }
    return (
        <div className="text-center account">
            {
                Object.keys(event).length !== 0 ?
                    <div>
                        <div>
                            <img src="https://i.ibb.co/7r5h4KD/Group-1329.png" className="w-25 mt-3" alt="img" />
                        </div>
                        <div className="login-form">
                            {
                                Object.keys(event).length !== 0 && <form className="mt-3" onSubmit={handleSubmit} >
                                    <h4 className="ml-3 text-left mt-2" > Register as a Volunteer</h4>
                                    <input name="fullName" value={loggedInUser.displayName} onChange={handleChange} className="form-control m-3" required type="text" placeholder="Full Name" />
                                    <input name="email" value={loggedInUser.email} onChange={handleChange} className="form-control m-3" required type="email" placeholder="Username or Email" />
                                    <input name="date" onChange={handleChange} className="form-control m-3" required type="date" placeholder="Date" />
                                    <input name="description" onChange={handleChange} className="form-control m-3" required type="text" placeholder="Description" />
                                    <input name="eventName" value={event.title} onChange={handleChange} className="form-control m-3" required type="text" placeholder="Organize books at the library." />
                                    <button type="submit" className="btn btn-primary form-control ml-3 m-3 btn-width" >Registration</button>
                                </form>
                            }

                        </div></div>
                    : <NotFound />
            }

        </div>
    );
};

export default CreateAccount;