import React, {useState} from "react";
import Axios from 'axios';


// https://www.geeksforgeeks.org/what-is-react-router-dom/
// https://www.simplilearn.com/tutorials/reactjs-tutorial/login-page-in-reactjs


// https://www.youtube.com/watch?v=hYYd_3Tz6Zo -- Send data from backend to frontend 
    // This will be used to get verify that the usernames and passwords are correct and exist within the database
        // We will then send a response back to the user saying whether or not the login was successful
        // There userID / Username will then be kept on the corner of the screen showing who they are logged in as
        // When they logout their data  stored in the points and tasks area will be saved to the database in the dailyprogress table


// https://apidog.com/blog/http-methods/ -- HTTP Methods
export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [data, setData] = useState([]);

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
          signIn();
        }
      }

      function handleChangeUN(event) {
        setUsername(event.target.value);
      }

      function handleChangePW(event) {
        setPassword(event.target.value);
      }

      function signIn() {
        fetch('http://localhost:3002/api/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password }),
            }) 
            .then(response => response.json())
            .then(data => {
              console.log('Logging in');
            }) 
            .catch(error => console.error('Error:', error)); 
      }


    return (
        <div className = 'Login'>
            <h1>Login</h1>
            <div>
                <input
                    type = "text"
                    placeholder = "Username"
                    value = {username}
                    onChange = {handleChangeUN}
                />
                <div>
                <input
                    type = "text"
                    placeholder = "Password"
                    value = {password}
                    onChange = {handleChangePW}
                    onKeyDown = {handleEnterKey}
                />
                </div>
                <button
                    className = 'login-button'
                    onClick = {signIn}>
                    Login
                </button>
            </div>
        </div>
                    




    );



}