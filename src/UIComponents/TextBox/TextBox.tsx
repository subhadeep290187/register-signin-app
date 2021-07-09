import {FC, ReactElement, useContext, useState} from 'react';
import { StoreContent } from '../../Context/content';
import ErrorMsg from '../Error/errorMsg';
import TextBoxValidation, { TextBoxValidationObj, ValidationRules } from './TextBoxValidation.module';

interface textBoxComponent {
    label: string,
    placeholder?:string,
    id: string,
    typeOfTextBox:string,
    validationRules?: ValidationRules,
    setValue: Function
}

const TextBox: FC<textBoxComponent> = ({label, placeholder, id, typeOfTextBox, setValue, validationRules}) =>{
    const [errorMsg, setErrorMsg] = useState<string>("");

    const content:any = useContext(StoreContent)
    let textBoxValidation: TextBoxValidationObj = {
        fieldName:'',
        validationRules: validationRules,
        txtValue:'',
        content:content
    };
    const validateInput = (e:any) =>{
        setErrorMsg("")
        textBoxValidation.fieldName = label;
        textBoxValidation.txtValue = e.currentTarget.value;
        
        const errMsg:string = TextBoxValidation(textBoxValidation)?.props.children[1];
    
        if(errMsg) { setErrorMsg(errMsg); return}
        
        setValue(e.currentTarget.value)
    }
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input 
                type={typeOfTextBox} 
                className="form-control" 
                placeholder={placeholder}
                onChange={e=>setValue(e.currentTarget.value)}
                onBlur={validateInput}></input>
            <ErrorMsg message={errorMsg} />
        </div>
    );
}

export default TextBox;