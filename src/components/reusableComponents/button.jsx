import React from "react";

const Button = ({btnText, handleClick}) => {
    return (
        <button className="btn" onClick={handleClick}>{btnText}</button>
    )
}

export default Button;