import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const handleItemClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Ajoute la propriété 'smooth' pour un défilement en douceur
    });
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={handleItemClick} src={props.image} alt={props.name} className='product-image' />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          €{props.new_price}
        </div>
        <div className="item-price-old">
          €{props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
