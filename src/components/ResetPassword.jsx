import {useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
function ResetPassword() {
    const [password,setPassword] = useState('');
    const {token} = useParams();
    const resetPassword = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/reset-password/'+token,{password}).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className="container login_wrapper d-flex justify-content-center align-items-center">
        <form className="login_form shadow" onSubmit={resetPassword}>
             <div className="d-flex justify-content-center">
                <h5>Reset Password</h5>
             </div>
             <hr className="w-50 m-0  mx-auto"/>
             <div>
                <label className="form-label py-2" htmlFor="newPassword">New password</label>
                <input type="password" className="form-control" placeholder="new password" onChange={(e)=>{setPassword(e.target.value)}}/>
             </div>
           
             <div className="d-grid py-2 mt-3">
                <button type="submit" className="btn btn-success">Reset</button>
             </div>
             <div className='py-2 d-flex justify-content-center'>
                <a href='/login'>Login Here?</a>
             </div>
        </form>
    </div>
  )
}

export default ResetPassword