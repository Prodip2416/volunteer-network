import React, { useEffect, useState } from 'react';

const RegisterList = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/getVolunteers')
            .then(res => res.json())
            .then(result => {
                setVolunteerList(result);
                setIsDeleted(false);
            })
    }, [isDeleted])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((result => {
                if (result) {
                    setIsDeleted(true);
                }
            }));
    }

    return (
        <div className="mt-3">
            <table className="table table-striped volunteer">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Registration date</th>
                        <th scope="col">Volunteer list</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        volunteerList && volunteerList.map(item =>
                            <tr key={item._id}>
                                <th>{item.fullName}</th>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>{item.eventName}</td>
                                <td><img className="w-50" onClick={() => handleDelete(item._id)} src="https://i.ibb.co/fpPJrLR/trash-2-9.png" alt="delete" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RegisterList;