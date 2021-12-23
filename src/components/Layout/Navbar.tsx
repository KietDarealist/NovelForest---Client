import Logo from '../../assets/images/traibixanh.png'
export default function Navbar() {
    return (
        <div className='flex bg-primary p-2'>
            <div className='flex w-1/2 items-center'>
                <img src={Logo} alt="lgo" className=' h-2'/>
                <div className='flex gap-4 mx-4 text-white font-medium text-lg'>
                    <a href="#">Thể loại</a>
                    <a href="#">Thể loại</a>
                    <a href="#">Thể loại</a>
                </div>

            </div>
            <div className='flex items-center  '>
            <input type="text" className="form-input block px-2 py-1 rounded" placeholder="john@example.com"/>
            <div className='mx-auto flex gap-8'>
                <a href="#">Log in</a>
                <a href="#">Register</a>
            </div>

            </div>
        </div>
    )
}
