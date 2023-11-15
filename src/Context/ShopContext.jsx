import React,{ createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

// Création d'un contexte pour gérer l'état global du magasin
export const ShopContext = createContext(null);

// Fonction utilitaire pour obtenir un panier par défaut avec une quantité initiale de 0 pour chaque produit
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;   
    }
    return cart;
}
// Composant principal qui fournit le contexte du magasin à ses composants enfants
const ShopContextProvider = (props) => {
    // État local pour gérer les articles dans le panier
    const [cartItems,setCartItems] = useState(getDefaultCart());

    // Fonction pour ajouter un article au panier
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    // Fonction pour supprimer un article du panier
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems) 
        {
            if(cartItems[item]>0)
            {
            totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    // Valeur du contexte qui sera partagée avec les composants enfants
    const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    // Rendu du composant avec le contexte fourni à ses enfants
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}        
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;