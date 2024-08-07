import {useState} from 'react'
import axios from 'axios';
function ForgotPassword() {
    const [email,setEmail] = useState('');

    const userForgotPassword = (e) => {
        e.preventDefault();
       axios.post('http://localhost:3000/auth/forgot-password',{email}).then((res)=>{
        console.log(res)
       }).catch((err)=>{
        console.log(err)
       })
    }
  return (
    <div className='forgotPassword_wrapper d-flex justify-content-center align-items-center'>
        <form className='forgotPassword_form shadow' onSubmit={userForgotPassword}>
            <div className='d-flex justify-content-center'>
                <h6>Forgot Password</h6>
            </div>
            <hr className='m-0 mt-1 w-50 mx-auto'/>
            <div className='py-2'>
                <label className='form-label' htmlFor='email'>Email</label>
                <input type='email' placeholder='Email...' className='form-control' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='py-2 mt-3 d-grid'>
                <button className='btn btn-success'>Send</button>
            </div>
            <div className='py-2 d-flex justify-content-center'>
                <a href='/login'>Login Here?</a>
            </div>
        </form> 
    </div>
  )
}

export default ForgotPassword