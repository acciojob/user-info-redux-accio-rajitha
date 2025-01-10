// App.js
// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./actions";
import './../styles/App.css';

const App = () => {
  const { name, email } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} name="name" />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} name="email" />
      </label>
      <div className="output">
        <p>Current Store Values</p>
        <p>Name- {name}</p>
        <p>Email- {email}</p>
      </div>
    </div>
  );
};

export default App;
/*
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./actions";
import './../styles/App.css';

const App = () => {
  const { name, email } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <div className="output">
      <p>Current Store Values</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default App;
/*

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from './actions';
import './../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handleUpdateName = () => {
    dispatch(updateName(inputName));
    setInputName(''); // Clear the input field
  };

  const handleUpdateEmail = () => {
    dispatch(updateEmail(inputEmail));
    setInputEmail(''); // Clear the input field
  };

  return (
    <div>
      <h1>User Info (Redux)</h1>
      <div>
        <label>
          Name: 
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <button onClick={handleUpdateName}>Update Name</button>
      </div>
      <div>
        <label>
          Email: 
          <input
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </label>
        <button onClick={handleUpdateEmail}>Update Email</button>
      </div>
      <h2>Current values in store:</h2>
      <p>Name - {name}</p>
      <p>Email - {email}</p>
    </div>
  );
};

export default App;
/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       
    </div>
  )
}

export default App
*/