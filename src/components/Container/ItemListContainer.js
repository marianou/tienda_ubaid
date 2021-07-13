import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import { getFirestore } from '../../firebase'

const ItemListContainer = ({prodnom,setItems}) => {
    
  const [localItems,SetLocalItems]=useState([])

  useEffect(() => {
    
    /*const items=[
      {id:1, title:'Tela Polar', description: 'Tela Polar de primera calidad', price: 200, pictureUrl:'https://media.fabfab.net/images/products/small/polar-alpino-tela-de-sudadera-suave-uni-berenjena--81_14370_045_ZB02.jpg'},
      {id:2, title:'Tela Algodón', description: 'Tela de Algodon del mas suave y natural', price: 100, pictureUrl:'https://i.pinimg.com/originals/3a/30/e9/3a30e95cf6762cc7b33c110eadc8e36d.jpg'},
      {id:3, title:'Tela de Seda', description: 'Tela de la mas fina seda de Argentina', price: 280, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_700866-MLA43566915696_092020-O.jpg'}
    ]*/

    const db = getFirestore();

		const itemCollection = db.collection('items');

    /*const getItems =(prod)=>{
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(prod)
          },2000)
        })
    }

    getItems(items)
        .then(result => SetLocalItems(result) )
        .catch(error=>console.log(error.message))
    
    */

    let validItems = itemCollection.where('price', '>', 0);

		if(category_id){
			validItems = validItems.where('categoryId', '==', "10");
			console.log(validItems);
		}

		validItems.get().then((data)=>{
			if(!data.length === 0){
				console.log('No se encontraron productos');
			}
			
			SetLocalItems(data.docs.map(doc => ({...doc.data(), id: doc.id})));
		});

      
  }, [])
  
  


    return (

        <div>
            <h3 align="center">{prodnom}</h3>        
            <br/>
            <ItemList
              items={localItems}              
              setItems={setItems}
            />            
        </div>           
      
      
        
    )


}

export default ItemListContainer
