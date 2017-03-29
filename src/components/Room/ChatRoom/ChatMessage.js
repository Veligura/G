import React from 'react';
import './ChatMessage.css';


export default  ({message}) => (

    <div className="message">
        <img src={message.fromUser.avatarUrlSmall} alt=""/>

        <div className="message_details">

            <div>{message.text}</div>
        </div>
    </div>
)