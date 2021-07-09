import React, { FC } from 'react';

interface buttonComponent{
    btnText: string
}

const Button:FC<buttonComponent> = ({btnText})=> {
    return (
        <div className="form-group">
            <button className="btn btn-primary">{btnText}</button>
        </div>
    );
}

export default Button;