import React from 'react';
import './images.css'

const Images = ({ images, group }) => {
    const group_images = onGroup(images)
    return (
        <div>
            {group ? Object.keys(group_images).map(tag =>
            <center>
              <fieldset>
                <div className='legend'><legend>{tag}</legend></div>
                    <ul>
                    {group_images[tag].map(e =>
                        <li key={e.id}>
                            <img src={e.image} alt='None'></img>
                        </li>)}
                    </ul>
              </fieldset>
            </center>)
            :
            <div className='stack'>
                <ul>
                {images.sort((a, b) => {return a.date - b.date}).map(e => 
                    <li key={e.id}>
                        <img src={e.image} alt='None'></img>
                    </li>
                    )}
                </ul>
            </div>}
        </div>
    );
};

export default Images;

const onGroup = images => {
    const groups = images.reduce((r, a) => {
        r[a.tag] = r[a.tag] || [];
        r[a.tag].push(a);
        return r;
      }, {});
    return groups
};