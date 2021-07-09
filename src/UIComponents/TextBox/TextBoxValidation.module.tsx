import React, { FC, ReactElement, useContext } from 'react';
import { StoreContent } from '../../Context/content';
export interface ValidationRules {
    numberOnly?:boolean,
    isRequired?:boolean
}

export interface TextBoxValidationObj {
    fieldName:string,
    validationRules?: ValidationRules,
    txtValue: string,
    content?:any
}
const TextBoxValidation : FC<TextBoxValidationObj>= ({fieldName, validationRules, txtValue, content}):ReactElement =>{
    
    const validateField = () : string=>{
        if(validationRules?.isRequired && !txtValue){
            return (`${fieldName} ${content.reguiredMsg}`);
        }else if(validationRules?.numberOnly 
                && txtValue && !txtValue?.match(/^[0-9]+$/)){
            return (`${fieldName} ${content.noOnly}`);
        }
        return '';
    }
    return (  <> {validateField()} </>);
}

export default TextBoxValidation;