import React, { useState } from 'react';
import WorkPanel from './work-panel';
import Notification from './notification';
import Images from './images';

const App = () => {
    const [images, setState] = useState([]);
    const [group, setGroup] = useState(false);
    const [notification, setNotification] = useState('');
    
    return (
        <div>
            <WorkPanel
                    images={images}
                    setState={setState}
                    group={group}
                    setGroup={setGroup}
                    setNotification={setNotification}/>
            <Notification
                    notification={notification}
                    setNotification={setNotification}/>
            <Images
                    images={images}
                    group={group}/>
        </div>
    )
};

export default App;