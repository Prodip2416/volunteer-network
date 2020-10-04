import React, { createContext, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Main />
      </UserContext.Provider>
    </div>
  );
}

export default App;
