import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddEvent = () => {
    const [event, setEvent] = useState({ title: '', description: '', date: '' });
    let history = useHistory();

    const handleSubmit = (e) => {
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/');
                }
            })

        e.preventDefault();
    }
    const handleBlur = (e) => {
        const newEvent = { ...event };
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

    return (
        <form className="form-bg mt-5" onSubmit={handleSubmit}>
            <div className="row m-2 p-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Event Title</label>
                        <input name="title" type="text" onBlur={handleBlur} className="form-control" placeholder="Event Title" required />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" onBlur={handleBlur} className="form-control" rows="3"></textarea>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Event Date</label>
                        <input name="date" type="date" onBlur={handleBlur} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Banner</label>
                        <input name="image" type="file" className="form-control" />
                    </div>
                    <div className="text-right mt-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddEvent;