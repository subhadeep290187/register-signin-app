import React from 'react';
import Button from '../UIComponents/Button/Button';
import TextBox from '../UIComponents/TextBox/TextBox';

const Step1 = ()=>{

    return (
        <div className="form-group">
            <TextBox id="fname" label="Firstname" typeOfTextBox="text" />

            <TextBox id="lname" label="Lastname" typeOfTextBox="text" />

            <Button btnText="Continue" />
        </div>
    )
}

export default Step1;