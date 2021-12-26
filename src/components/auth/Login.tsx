import { Link } from 'react-router-dom'
import './style.css'
export default function Login() {
    return (
        <div className='body'>
          <div className="login">
            <h1 className='py-2'>Login</h1>
            <form method="post" >
                <input className='w-full p-1 my-1 border' type="text" name="u" placeholder="Username" required />
                <input className='w-full p-1 my-1 border' type="password" name="p" placeholder="Password" required />
                <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
                <Link to="/register" className='text-black'>
                    If you dont have an account? Sign up now
                </Link>
            </form>
          </div>
        </div>
    )
}
