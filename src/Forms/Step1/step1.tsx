import { ContextType, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextData } from '../../App';
import { StoreContent } from '../../Context/content';
import Button from '../../UIComponents/Button/Button';
import SummaryError from '../../UIComponents/SummaryError/summaryError';
import TextBox from '../../UIComponents/TextBox/TextBox';
import { ValidationRules } from '../../UIComponents/TextBox/TextBoxValidation.module';
import './step1.css';

export interface FormDataValues {
    firstName:string,
    lastName:string,
    phoneNo:string
}

const Step1 = ()=>{

    const history = useHistory();

    const content:any = useContext(StoreContent);

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNo, setPhoneNo] = useState<string>("");
    const [isSummaryError, setSummaryError] = useState<boolean>(false);


    const validationForFname:ValidationRules = {
        isRequired:true,
    }

    const validationForPhoneNo:ValidationRules = {
        numberOnly:true
    }
    const submitForm = (e: any):any =>{
        setSummaryError(false);
        const stateObj:FormDataValues ={
            firstName, lastName, phoneNo
        }
        if(!firstName || !phoneNo.match(/^[0-9]+$/)){
            setSummaryError(true);
        }else{
            history.push('/review', stateObj);
        }
    }
    useEffect(()=>{

        console.log(content);
        
    },[])

    return (
        <div className="container-fluid">
             <div className='form-seperator'><SummaryError isError={isSummaryError} /></div>
            <div className='form-seperator'>
                <TextBox 
                    id="fname" 
                    label={content.fname} 
                    typeOfTextBox="text" 
                    setValue={setFirstName}
                    validationRules={validationForFname}/>
            </div>
            <div className='form-seperator'>
                <TextBox 
                    id="lname" 
                    label={content.lname} 
                    typeOfTextBox="text" 
                    setValue={setLastName} />
            </div>
            <div className='form-seperator'>
                <TextBox 
                    id="phone" 
                    label={content.phone}
                    typeOfTextBox="text" 
                    setValue={setPhoneNo}
                    validationRules={validationForPhoneNo} />
            </div>
            <div className='form-seperator'>
                <Button btnText="Continue" clickFunction={submitForm} />
            </div>
        </div>
    )
}

export default Step1;