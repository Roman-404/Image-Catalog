import React from 'react';

const ImageItem = ({ id, tag, image, setTag }) => {
    const onItemClick = tag => {
        console.log(tag)
        setTag(tag)
    }
    
    return (
        <li key={id}
            onClick={() => onItemClick(tag)}>
            <div className='edge'>
                <img src={image} alt='None'></img>
            </div>
        </li>
    )
}

export default ImageItem;