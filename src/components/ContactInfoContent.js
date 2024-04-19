import "../App.css";
import React from 'react';

const ContactInfoContent=(props)=>{
    return(
        <div className="contact-info-content">
            <h3>
                <strong>
                    {props.contactOffice}
                </strong>
            </h3>
            <div className="contact-info-text">
                電話：{props.phone}
                <br/>
                Email：{props.email}
                <br/>
                聯絡人：{props.contact}
            </div>
        </div>
    )
}

export default ContactInfoContent