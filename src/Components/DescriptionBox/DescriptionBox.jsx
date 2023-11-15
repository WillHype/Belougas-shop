import React from 'react'
import './DescriptionBox.scss'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (7777)</div>
            </div>
            <div className="descriptionbox-description">
                <p>The Midnight Velvet Dress is a stunning blend of sophistication and allure.
                    Crafted from sumptuous midnight-blue velvet, this dress drapes elegantly, accentuating your curves with grace.
                    The fitted bodice features delicate lace detailing, while the A-line skirt flows gracefully to the floor, creating a mesmerizing silhouette.
                </p>
                <p>
                    <span>Key Features:</span>
                <ul>
                    <li>liLuxurious midnight-blue velvet fabric</li>
                    <li>Fitted bodice with intricate lace overlay</li>
                    <li>Flattering A-line silhouette</li>
                    <li>Floor-length hem for a touch of drama</li>
                    <li>Back zipper closure for easy wear</li>
                    <li>Available in sizes XS to XL</li>
                </ul>    
                    <span>Occasion:</span> Perfect for black-tie events, galas, or any occasion where you want to make a lasting impression.
                        Pair it with statement heels and minimal jewelry for a look that exudes timeless elegance.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox