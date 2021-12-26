import { Link } from 'react-router-dom'
import './style.css'
export default function Register() {
    return (
        <div>
          <div className="login ">
                <h1 className='py-2'>Register</h1>
                <form method="post" >
                <input className='w-full p-1 my-1 border' type="text" name="u" placeholder="Username" required />
                <input className='w-full p-1 my-1 border' type="password" name="p" placeholder="Password" required />
                    <button type="submit" className="btn btn-primary btn-block btn-large">Register</button>
                    <Link to="/login" className='text-black pt-4'>
                        If you already have an account? Login now
                    </Link>
                </form>
            </div>
        </div>
    )
}
