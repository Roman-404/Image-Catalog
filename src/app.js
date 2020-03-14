import React, { useState } from 'react';
import WorkPanel from './work-panel';
import Images from './images';

const App = () => {
    const [images, setState] = useState([]);
    const [group, setGroup] = useState(false)
    
    return (
        <div>
            <WorkPanel
                    images={images}
                    setState={setState}
                    group={group}
                    setGroup={setGroup}/>
            <Images
                    images={images}
                    group={group}/>
        </div>
    )
};

export default App;