import React, {FC} from 'react';

interface textBoxComponent {
    label: string,
    placeholder?:string,
    id: string,
    typeOfTextBox:string
}

const TextBox: FC<textBoxComponent> = ({label, placeholder, id, typeOfTextBox}) =>{
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={typeOfTextBox} className="form-control" placeholder={placeholder}></input>
        </div>
    );
}

export default TextBox;