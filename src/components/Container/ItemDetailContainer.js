import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';

const ItemDetailContainer = ({mostrarDetalle,itemsel}) => {
    const [localItem,SetLocalItem]=useState([]);

    //console.log(itemsel.title);
 

 useEffect(() => {

    const getItem =(prod)=>{
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(prod)
          },2000)
        })
    }

    getItem(itemsel)
       .then(result=>SetLocalItem(result))
       .catch(error=>console.log(error.message))
    

 }, )      
     


    return (
        
        <div>
            <ItemDetail 
                itemd={localItem}
                mostrarDetalle={mostrarDetalle}
            />
        </div>
    )

}

export default ItemDetailContainer
