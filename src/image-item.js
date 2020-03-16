import React from 'react';

const ImageItem = ({ id, tag, image, setTag }) => {

    return (
        <li key={id}
            onClick={() => setTag(tag)}>
            <div type="application/x-shockwave-flash" className='edge'>
                <embed src={image} alt='None'></embed>
            </div>
        </li>
    )
}

export default ImageItem;