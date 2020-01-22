import React from 'react'
import axios from 'axios'

const Signup: React.FC = (props: any) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (event: any) => {
    event.preventDefault()
    let params = {
      name: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    };
    axios
      .post("/auth/users", params)
      .then(response => {
        props.history.push('/login')
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Username' onChange={ e => {setUsername(e.target.value)}} />
        <input placeholder='Email' type='email' onChange={ e => {setEmail(e.target.value)}} />
        <input placeholder='Password' type='password' onChange={ e => {setPassword(e.target.value)}} />
        <input placeholder='Password Confirmation' type='password' onChange={ e => {setPasswordConfirmation(e.target.value)}} />
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

export default Signup