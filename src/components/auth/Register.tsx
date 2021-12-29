import axios from 'axios'
import { createRef, useRef, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import './style.css'


export default function Register() {

    const [email,setEmail] = useState('')
    const [pass, setPass ] = useState('')
    const navigate = useNavigate()
    const [err,setErr] = useState(false)

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
            const res = await axios.post('http://localhost:8000/api/auth/register',{
              account : email,
              password : pass
            })
            console.log(res.data.success)
            if (res.data.success)
              navigate('/')
        }
        catch(err){
          console.log(err)
        }
    }


    return (
        <div>
          <div className="login ">
                <h1 className='py-2'>Register</h1>
                <form onSubmit={handleSubmit} >
                <input value={email} onChange={onEmailChange} className='w-full p-1 my-1 border' type="text" name="u" placeholder="Username" required />
                <input value={pass} onChange={onPassChange} className='w-full p-1 my-1 border' type="password" name="p" placeholder="Password" required />
                    <button type="submit" className="btn btn-primary btn-block btn-large">Register</button>
                    <Link to="/login" className='text-black pt-4'>
                        If you already have an account? Login now
                    </Link>
                </form>
            </div>
        </div>
    )
}
