import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function({children}){
	const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantItems, setcantItems] = useState(0);

    function addToCart(obj){
        console.log(obj);
        if (isInCart(obj)) {
            console.log('Este elemento ya esta agregado.');
            return;
          }
        setItems([...items, obj]);
        setTotal(total+obj.price*obj.quantity);
        setcantItems(cantItems+1);
        console.log('Elemento agregado!');
	}

    function isInCart({ id }) {
        return id === undefined ? undefined : getFromCart(id) !== undefined;
    }

    function getFromCart(id) {
        return items.find(x => x.id === id);
      }

	function removeItem (id,precio){
		if (items.length > 0) {
			const updateItems = items.filter(function (item){
				return item.id !== id;
			});
			setTotal(total-precio);
            setcantItems(cantItems-1);
            setItems(updateItems);
            

		}
	}

return <CartContext.Provider value={{items, total,cantItems, setItems, addToCart, removeItem}}>
{children}
</CartContext.Provider>
}
