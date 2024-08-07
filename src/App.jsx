
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './pages/Home'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'
// import Navbar from './components/Navbar'
function App() {

  return (
    <>
    {/* <Navbar/> */}
          <Router>
          <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/forgotPassword' element={<ForgotPassword/>}/>
              <Route path='/reset-password/:token' element={<ResetPassword/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
