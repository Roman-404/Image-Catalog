import React from 'react';

const ImageItem = ({ id, tag, image, setTag }) => {

    return (
        <li key={id}
            onClick={() => setTag(tag)}>
            <div className='edge'>
                <img src={image} alt='None'></img>
            </div>
        </li>
    )
}

export default ImageItem;