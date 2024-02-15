import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dcard = ({item : {id, image, title, desc, sidepara, paraImage_one, paraImage_two}}) => {
  return (
    <>
      <div className="items">
        <div className="img">
            <img src={image} alt="" />
            <Link to={`/singlepage/${id}`} className='BlogItem-link'>
                <i><FaExternalLinkAlt/></i>
            </Link>
        </div>
        <div className="title">
            <h3>{title}</h3>
        </div>
      </div>
    </>
  )
}

export default Dcard
