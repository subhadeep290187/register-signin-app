import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FormDataValues } from "../Step1/step1";
import './step2.css'


function Step2() {
    const location = useLocation();
    const [formValue, setFormValue] = useState<FormDataValues>()
    useEffect(()=>{
        let formData:any = location.state;
        setFormValue(formData)
    },[])
    return (
        <div className="container">
            <div className="form-inline">
                <div className="alert alert-success">Successfully Register</div>
                <div>
                    Firstname: {formValue?.firstName}
                </div>
                <div>
                    Lastname: {formValue?.lastName}
                </div>
                <div>
                    Phone Number : {formValue?.phoneNo}
                </div>
            </div>
        </div>
    );
}

export default Step2;