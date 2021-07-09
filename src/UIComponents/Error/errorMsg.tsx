
import { FC, ReactElement } from "react";
import './error.css'
interface ErrorMsg{
    message: string
}

const ErrorMsg: FC<ErrorMsg>= ({message})=>{
    return (
        <div className='error'>
            {message}
        </div>
    );
}

export default ErrorMsg;