import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../firebase'


const ItemDetailContainer = ({itemsel}) => {
    const [localItem,SetLocalItem]=useState({});
    
    const { itemid } = useParams();
    
    console.log("Item con UseParams: ",itemid)
    

 useEffect(() => {

    const db = getFirestore();
    //const id= itemsel.id
	  const itemCollection = db.collection('items');

    const product = itemCollection.doc(itemid);

    product.get().then((doc)=>{
        if (!doc.exists) {
          console.log('Item no encontrado');
          return;
        }
        console.log('Item encontrado: ',doc.data());
        SetLocalItem({ id: doc.id, ...doc.data() });
      })
    
    /*const items=[
        {id:1, title:'Tela Polar', description: 'Tela Polar de primera calidad', price: 200, pictureUrl:'https://media.fabfab.net/images/products/small/polar-alpino-tela-de-sudadera-suave-uni-berenjena--81_14370_045_ZB02.jpg'},
        {id:2, title:'Tela Algodón', description: 'Tela de Algodon del mas suave y natural', price: 100, pictureUrl:'https://i.pinimg.com/originals/3a/30/e9/3a30e95cf6762cc7b33c110eadc8e36d.jpg'},
        {id:3, title:'Tela de Seda', description: 'Tela de la mas fina seda de Argentina', price: 280, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_700866-MLA43566915696_092020-O.jpg'}
      ]
     
    const productId = items.filter(item => item.id == itemid)  
    
    console.log("productID:",productId)

    const getItem =(productId)=>{
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve(productId)
          },2000)
        })
    }

    getItem(itemsel)
       .then(result=>SetLocalItem(result))
       .catch(error=>console.log(error.message))
    
    */

 },[itemid] )      
     
    //console.log("Itemid:",itemid);

    return (
        
        <div>
            <ItemDetail 
                localItem={localItem}
            />
        </div>
    )

}

export default ItemDetailContainer
