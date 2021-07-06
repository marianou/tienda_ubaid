import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function({children}){
	const [items, setItems] = useState([]);

    function addToCart(obj){
        console.log(obj);
        if (isInCart(obj)) {
            console.log('Este elemento ya esta agregado.');
            return;
          }
        setItems([...items, obj]);
        console.log('Elemento agregado!');
	}

    
    function isInCart({ id }) {
        return id === undefined ? undefined : getFromCart(id) !== undefined;
    }

    function getFromCart(id) {
        return items.find(x => x.id === id);
      }

	function removeItem (id){
		if (items.length > 0) {
			const updateItems = items.filter(function (item){
				return item.id !== id;
			});
			setItems(updateItems);
		}
	}

return <CartContext.Provider value={{items, setItems, addToCart, removeItem}}>
{children}
</CartContext.Provider>
}
