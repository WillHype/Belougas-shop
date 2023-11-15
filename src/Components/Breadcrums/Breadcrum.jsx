import React from 'react'
import './Breadcrum.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breacrum">
        HOME <FontAwesomeIcon icon={faAngleRight} />
        SHOP <FontAwesomeIcon icon={faAngleRight} />
        {product.category} <FontAwesomeIcon icon={faAngleRight} />
        {product.name}
    </div>
  )
}

export default Breadcrum