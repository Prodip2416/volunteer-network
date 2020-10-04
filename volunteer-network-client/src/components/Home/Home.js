import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Event from '../Event/Event';
import HomeHeader from './HomeHeader/HomeHeader';


const Home = () => {
    const [event, setEvent] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);

    const handleAddEvent = (id) => {
        history.push(`/account/${id}`);
    }

    return (
        <div className="container">
            <HomeHeader />
            <div className="row bg-color">
                {
                    event && event.map(item => <Event key={item._id} task={item} handleAddEvent={handleAddEvent} />)
                }
            </div>
        </div>
    );
};

export default Home;