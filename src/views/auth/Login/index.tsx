import React from 'react'
import axios from 'axios'

const Login: React.FC = (props: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (event: any) => {
    event.preventDefault()
    let params = {
      email: email,
      password: password
    };
    axios
      .post("/auth/sessions", params)
      .then(response => {
        axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user_id", response.data.user_id);
        props.history.push('/')
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
    });
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Email' type='email' onChange={ e => {setEmail(e.target.value)}} />
        <input placeholder='Password' type='password' onChange={ e => {setPassword(e.target.value)}} />
        {errors && (
          errors.map((error:string, index) => {
            return <p key={index}>{error}</p>
          })
        )}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login