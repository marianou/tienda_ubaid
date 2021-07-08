import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ({itemsel}) => {
    const [localItem,SetLocalItem]=useState([]);
    
    const { itemid } = useParams();
    
    
 

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
            />
        </div>
    )

}

export default ItemDetailContainer
