import React from 'react'
import './Button.css'
const Button = ({varient="primary",children,props}) => {

    return (
        <div>
           <button className={`button ${varient}`} {...props}>{children}</button> 
        </div>
    )
}

export default Button
