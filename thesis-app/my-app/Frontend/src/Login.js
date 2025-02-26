import React, {useState} from "react";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
          login();
        }
      }

      function handleChangeUN(event) {
        setUsername(event.target.value);
      }

      function handleChangePW(event) {
        setPassword(event.target.value);
      }

      function login() {
        console.log('Logging in...');
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
                    onchange = {handleChangePW}
                    onKeyDown = {handleEnterKey}
                />
                </div>
                <button
                    classname = 'login-button'
                    onClick = {login}>
                    Login
                </button>
            </div>
        </div>
                    




    );



}