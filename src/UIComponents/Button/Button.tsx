import { FC } from 'react';
import './button.css'

interface buttonComponent{
    btnText: string,
    clickFunction: React.MouseEventHandler<HTMLButtonElement>
}

const Button:FC<buttonComponent> = ({btnText, clickFunction})=> {
    return (
        <div className="form-group">
            <button
                className='btn-width btn btn-primary'
                onClick={clickFunction}>{btnText}</button>
        </div>
    );
}

export default Button;