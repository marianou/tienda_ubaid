import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';

const ItemDetailContainer = ({setDetalle,itemsel}) => {
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
                setDetalle={setDetalle}
            />
        </div>
    )

}

export default ItemDetailContainer
