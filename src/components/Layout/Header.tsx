import React, { useEffect, useState} from "react"
import { Link } from "react-router-dom";
import {SearchIcon, MenuIcon} from "@heroicons/react/outline"



interface IProps{

}

const Header:React.FC<IProps> = (props):JSX.Element => {

    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(1);

    setInterval(()=> { 
        setWidth(window.innerWidth)
    },500)
    useEffect(() => {
       if (width>700)
            setOpen(false)
    }, [width])


    return (
        //background
        <div className="items-center h-4 bg-green xl:h-9 lg:h-7 md:h-6">
            {/*container*/}
            <nav className="flex items-center justify-between mx-auto my-auto xl:py-2 xl:w-11/12 xl:px-0 lg:w-full lg:px-4  md:px-2 md:py-1.5 px-2 py-0.5">
                {/*left-container*/}
                <div className="items-center justify-between hidden xl:w-50 md:w-32 md:flex">
                    {/*logo*/}
                   <Link to="/">
                        <div className="flex cursor-pointer xl:mr-3 lg:mr-2 md:mr-2">
                            <h3 className="italic font-bold text-white xl:text-3xl">Novel</h3>
                            <h3 className="italic font-bold text-dark-green xl:text-3xl ">Forest</h3>
                        </div>
                   </Link>
                   {/*left-menu*/}
                   <div className="flex items-center justify-between w-full xl:mt-1">
                       <Link to="/the-loai"><h4 className="font-semibold text-white cursor-pointer xl:text-xl hover:text-dark-green">Thể loại</h4></Link>
                       <Link to=""><h4 className="font-semibold text-white cursor-pointer xl:text-xl hover:text-dark-green">Sáng tác</h4></Link>
                       <Link to=""><h4 className="font-semibold text-white cursor-pointer xl:text-xl hover:text-dark-green">Thư viện</h4></Link>
                   </div>
                </div>
                {/*mobile-left-container*/}
                <div className="flex w-1/2 md:hidden">
                    <SearchIcon className="h-2 font-semibold" />
                </div>
                {/*right-container*/}
                <div className="items-center justify-between hidden float-right lg:w-1/2 md:w-1/3 md:flex">
                    <div className="justify-between py-0.5 px-1 bg-white lg:flex md:hidden xl:w-1/2 rounded-2xl">
                        <input placeholder="Tìm kiếm" className="w-full outline-none"/>
                        <SearchIcon className="cursor-pointer xl:h-2 xl:flex lg:flex lg:h-2"/>
                    </div>
                    <Link to="/login" 
                   
                    >
                        <button 
                    className="xl:px-2 xl:py-0.5 md:px-1 md:py-0.1 font-semibold rounded-2xl bg-light-grey text-dark-green xl:text-md hover:text-white hover:bg-dark-green"
                        
                        >
                           Đăng nhập

                        </button>
                    </Link>
                    <Link to="/register" >
                            <button className="xl:px-3 xl:py-0.5 md:px-1.5 md:py-0.1 font-semibold rounded-2xl bg-dark-green text-white xl:text-md hover:text-dark-green hover:bg-light-grey">
                            Đăng ký
                            </button>
                    </Link>
                </div>
                {/*right-mobile-container*/}
                <div className="flex items-center justify-between w-2/3 md:hidden">
                    <div className="flex cursor-pointer">
                        <h3 className="italic font-bold text-white xl:text-2xl">Novel</h3>
                        <h3 className="italic font-bold text-dark-green xl:text-2xl ">Forest</h3>
                    </div>
                    <MenuIcon className="h-3 font-semibold text-white cursor-pointer" onClick={()=>setOpen(!open)}/>
                </div>
            </nav>

            {/*ham-menu*/}
            <div className={` w-full right-0 h-screen z-20 absolute bg-dark-green ${open ? "block" :  "hidden" }`}>
            <Link to="/" onClick={()=>{setOpen(!open);}}><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Trang chủ</h3></Link>
               <Link to="/the-loai"><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Thể loại</h3></Link>
               <Link to="/sang-tac"><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Sáng tác</h3></Link>
               <Link to="/thu-vien"><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Thư viện</h3></Link>
               <Link to="/dang-nhap"><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Đăng nhập</h3></Link>
               <Link to="/dang-ky"><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Đăng ký</h3></Link>
               <Link to="/tim-kiem"><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Tìm kiếm</h3></Link>
               <Link to="/" onClick={()=>{setOpen(!open);}}><h3 className="my-0.5 text-sm font-semibold text-center text-white cursor-pointer">Đóng</h3></Link>
            </div>
        </div>
    )
}

export default Header;
