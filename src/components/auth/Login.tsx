import axios from 'axios'
import { createRef, useContext, useRef, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import './style.css'

import { apiUrl } from '../contants/constant'
import { AuthContext } from '../../contexts/AuthContext'

export default function Login() {
    const [email,setEmail] = useState('')
    const [pass, setPass ] = useState('')
    const navigate = useNavigate()
    const [err,setErr] = useState(false)
    //load contexts
    const {authInfo,login} = useContext(AuthContext)
    const {user} = authInfo

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setEmail(event.target.value)
    }
    const onPassChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
      setPass(event.target.value)
    }
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        setErr(false)
        try{
            login(email,pass)
            if (user)
            navigate("/")

        }
        catch(err){
          console.log(err)
        }
    }

    

    return (
        <div className='body'>
          <div className="login">
            <h1 className='py-2'>Login</h1>
            <form onSubmit={handleSubmit} >
                <input value={email} onChange={onEmailChange}  name="email" className='w-full p-1 my-1 border' type="text"  placeholder="Username" required />
                <input  value={pass} onChange={onPassChange} name="pass" className='w-full p-1 my-1 border' type="password" placeholder="Password" required />
                <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
                <Link to="/register" className='text-black'>
                    If you dont have an account? Sign up now
                </Link>
            </form>
          </div>
        </div>
    )
}
function useHistory() {
  throw new Error('Function not implemented.')
}

