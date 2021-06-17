import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';

const ItemDetailContainer = ({prod}) => {
    const [localItems,SetLocalItems]=useState([])

  useEffect(() => {

    const getItems =(prod1)=>{
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(prod1)
          },2000)
        })
    }

    getItems(prod)
        .then(result => SetLocalItems(result) )
        .catch(error=>console.log(error.message))
    

      
  }, [])

    return (
        
        <div>
            <ItemDetail 
                item={localItems}
            />
        </div>
    )
}

export default ItemDetailContainer
