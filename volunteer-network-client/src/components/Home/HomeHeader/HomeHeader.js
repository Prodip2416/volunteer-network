import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './HomeHeader.css';

const HomeHeader = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="row header m-4">
                <div className="col-md-5">
                    <Link to="/">
                        <img src="https://i.ibb.co/7r5h4KD/Group-1329.png" className="w-50" alt="img" />
                    </Link>
                </div>
                <div className="col-md-7 text-right">
                    <ul>
                        <li className="ml-3 mt-2"><Link to="/home">Home</Link></li>
                        <li className="ml-3 mt-2"><Link to="/">Donation</Link></li>
                        <li className="ml-3 mt-2"><Link to="/event">Events</Link></li>
                        <li className="ml-3 mt-2"><Link to="/">Blog</Link></li>
                        {
                            loggedInUser.email ? <>  <li className="ml-5"><strong>{loggedInUser.displayName}</strong></li>
                                <Link to="/admin"><li className="ml-5"><button className="btn btn-secondary">Admin</button></li></Link></>
                                :
                                <>
                                    <Link to="/admin"><li className="ml-5"><button className="btn btn-secondary">Admin</button></li></Link>
                                    <li className="ml-5"><button className="btn btn-primary">Register</button></li>
                                </>
                        }

                    </ul>
                </div>
            </div>
            <div className="text-center m-5">
                <h2 className="m-3">I grow by helping people in need.</h2>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button className="btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;