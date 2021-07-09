import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { StoreContent } from "../../Context/content";
import { FormDataValues } from "../Step1/step1";
import './step2.css'


function Step2() {
    const location = useLocation();
    const [formValue, setFormValue] = useState<FormDataValues>();
    const content:any= useContext(StoreContent);
    useEffect(()=>{
        let formData:any = location.state;
        setFormValue(formData)
    },[]);
    return (
        <div className="container">
            <div className="form-inline">
                <div className="alert alert-success">{content.successRegister}</div>
                <div>
                    {content.fname}: {formValue?.firstName}
                </div>
                <div>
                {content.lname}: {formValue?.lastName}
                </div>
                <div>
                    {content.phone} : {formValue?.phoneNo}
                </div>
            </div>
        </div>
    );
}

export default Step2;