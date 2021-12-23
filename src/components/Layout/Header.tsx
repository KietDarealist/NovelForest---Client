import React from "react"

interface IProps{

}

const Header:React.FC<IProps> = (props):JSX.Element => {
    return (
        <div className="text-green-500">
            Hello World
        </div>
    )
}

export default Header;
