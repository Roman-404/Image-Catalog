import React from 'react';
import './notification.css';

const Notification = ({ notification, setNotification }) => {
    setTimeout(() => setNotification(''), 3000)
    return (
        <div className='notification'>{notification}</div>
    )
}

export default Notification;