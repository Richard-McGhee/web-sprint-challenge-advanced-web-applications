import React, { useState } from "react"
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { push } = useHistory()
  const initState = {
    username: "",
    password: ""
  }
  const [loginState, setLoginState] = useState(initState)

  const handleChanges = evt => {
    setLoginState({
      ...loginState,
      [evt.target.name]: evt.target.value
    })
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    axios.post("http://localhost:5000/api/login", loginState)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      push("/bubblepage")
    })
    .catch(err => console.dir(err))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name="username"
        placeholder="Enter your username"
        value={loginState.username}
        onChange={handleChanges} />
        <input type="text"
        name="password"
        placeholder="Enter your password"
        value={loginState.password}
        onChange={handleChanges} />
        <button>LOGIN</button>
      </form>
    </>
  );
};

export default Login;
