import React from 'react';
import './Item.scss';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Item = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1000, smooth: 'easeInOutQuart' });
  };

  return (
    <div className="item">
      <ScrollLink to={`product-${props.id}`} smooth={true} duration={1000}>
        <img onClick={scrollToTop} src={props.image} alt="" />
      </ScrollLink>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">€{props.new_price}</div>
        <div className="item-price-old">€{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
