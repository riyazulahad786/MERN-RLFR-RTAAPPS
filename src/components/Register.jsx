import {useState} from 'react'
import axios from 'axios';
function Register() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const registerUser = (e) => {
     e.preventDefault();
     axios.post('http://localhost:3000/auth/register',{username,email,password})
     .then((response)=>{
      console.log(response)
     }).catch((err)=>{
      console.log(err)
     })
     console.log(e)
  }
  return (
    <div className="container register_wrapper d-flex justify-content-center align-items-center">
       <div className="register_form shadow">
            <form className="" onSubmit={registerUser}>
                <div className="d-flex justify-content-center">
                  <h4>Register</h4>
                </div>
                <hr className="m-1 w-50 mx-auto"/>
                <div className="">
                  <label className="form-label" htmlFor="username">Username</label>
                  <input type="text" placeholder="username" className="form-control" onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div className="">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" placeholder="email" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" placeholder="password" className="form-control" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
               
                <div className="d-grid py-3">
                   <button type="submit" className="btn btn-success">Register</button>
                </div>
                <div className="d-flex justify-content-center py-2">
                  <p>Already have account? <a href="/login">Login Here</a></p>
                </div>
            </form>
       </div>
    </div>
  )
}

export default Register