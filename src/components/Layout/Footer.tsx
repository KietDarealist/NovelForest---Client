import React  from "react";
import {Link} from "react-router-dom";


interface IProps{

}


const Footer:React.FC<IProps> = (props):JSX.Element => {
    return (
        <div className="h-10 px-2 py-1 xl:h-18 lg:h-15 md:h-12 bg-green">
            {/*logo*/}
                <div className="justify-center mx-auto w-max">
                    <Link to="/">
                        <div className="flex cursor-pointer xl:mr-3 lg:mr-2 md:mr-2">
                            <h3 className="text-lg italic font-bold text-white xl:text-3xl lg:text-2xl md:text-xl">Novel</h3>
                            <h3 className="text-lg italic font-bold text-dark-green xl:text-3xl lg:text-2xl md:text-xl ">Forest</h3>
                        </div>
                    </Link>
                </div>

            {/*Items*/}
            <div className=" mx-auto xl:mt-1.5 xl:w-3/4 lg:w-5/6 md:w-11/12   lg:mt-1 mt-0.5">
                <div className="flex flex-wrap justify-between">
                    <Link to="/"><h4 className="font-semibold text-white cursor-pointer xl:text-xl md:text-lg text-xxs">Về chúng tôi</h4></Link>
                    <Link to="/"><h4 className="font-semibold text-white cursor-pointer xl:text-xl md:text-lg text-xxs">Điều khoản sử dụng</h4></Link>
                    <Link to="/"><h4 className="font-semibold text-white cursor-pointer xl:text-xl md:text-lg text-xxs">Bản quyền</h4></Link>
                    <Link to="/"><h4 className="font-semibold text-white cursor-pointer xl:text-xl md:text-lg text-xxs">Chính sách bảo mật</h4></Link>
                    <Link to="/"><h4 className="font-semibold text-white cursor-pointer xl:text-xl md:text-lg text-xxs md:block">Quyền lợi</h4></Link>
                    <Link to="/"><h4 className="font-semibold text-white cursor-pointer xl:text-xl md:text-lg text-xxs md:block">Cộng tác</h4></Link>
                </div>
                <h4 className="mt-1 font-semibold text-center text-white xl:text-xl md:text-lg text-xxs xl:mt-2">© 2021 - Bản quyền thuộc về novelforest.net</h4>
            </div>
        </div>
    )
}

export default Footer;