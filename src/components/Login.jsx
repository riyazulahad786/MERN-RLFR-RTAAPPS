import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [email,setEmail]= useState('');
  const [password,setPassword] = useState('');
  axios.defaults.withCredentials = true
  const userLogin= (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/login',{email,password})
    .then((res)=>{
      if(res.data.status){
         navigate('/home')
      }
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="container login_wrapper d-flex justify-content-center align-items-center">
         <form className="login_form shadow" onSubmit={userLogin}>
              <div className="d-flex justify-content-center">
                <h5>Login</h5>
              </div>
              <hr className="m-0 mt-1 w-50 mx-auto"/>

              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div>
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <div className='py-2 d-flex justify-content-end'>
                <a href='/forgotPassword'>Forgot password ?</a>
              </div>
              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-success">Login</button>
              </div>
              <div className="py-1 d-flex justify-content-center">
                <p>New user? <a href="/register">Register Here</a></p>
              </div>
         </form>
    </div>
  )
}

export default Login