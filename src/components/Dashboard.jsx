import {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
    const navigate = useNavigate();
    useEffect(()=>{
      axios.get('http://localhost:3000/auth/verify').then((res)=>{
        console.log(res)
        if(res.data.status){
              //
        }else{
            navigate('/')
        }
      }).catch((err)=>{
        console.log(err)
      })
    },[])
  return (
    <div>
        
    </div>
  )
}

export default Dashboard