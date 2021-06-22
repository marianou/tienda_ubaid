import React from 'react'
import ItemDetail from './ItemDetail'
import items from './ItemListContainer'
import { useEffect, useState } from 'react';

const ItemDetailContainer = (mostrarDetalleItem) => {
//    const [localItem,SetLocalItem]=useState()

    
 // useEffect(() => {
//
//    const getItem =(prod1)=>{
//        return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//            resolve(prod1)
//          },2000)
//        })
//    }

//    getItem(items)
//        .then(result => SetLocalItem(
//            result.forEach(element => {
//                if (it.id={prod}){
//                    return it
//                }
//            })
                
            
            
//            ))
//        .catch(error=>console.log(error.message))
    

//         }, )      
        

    return (
        
        <div>
            <ItemDetail 
                //item={localItem}
            />
        </div>
    )

}

export default ItemDetailContainer
