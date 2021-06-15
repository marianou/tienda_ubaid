import { useEffect } from 'react';
import ItemList from './ItemList'


const ItemListContainer = ({prodnom}) => {
    const productos = [
        {
          id:1,
          title:'Tela 1',
          description: 'Polar',
          price: 200,
          pictureUrl:'https://media.fabfab.net/images/products/small/polar-alpino-tela-de-sudadera-suave-uni-berenjena--81_14370_045_ZB02.jpg'
        },
        {
            id:2,
            title:'Tela 2',
            description: 'Algodón',
            price: 200,
            pictureUrl:'https://i.pinimg.com/originals/3a/30/e9/3a30e95cf6762cc7b33c110eadc8e36d.jpg'
        },
        {
            id:3,
          title:'Tela 3',
          description: 'Seda',
          price: 200,
          pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_700866-MLA43566915696_092020-O.jpg'
        }
      ];

      useEffect(() => {
        const task = new Promise((resolve, reject) => {
          // pasados 2 segundo....
          console.log('Esperando 2 segundos..')
          setTimeout(() => {
          resolve(productos);
          }, 2000);
        });
  
      task.then((result)=>
        {
          if(result){
            productos.forEach((producto)=>
             console.log(producto)
            )
          }
           else{
            console.log("No hay producto")
           }
          },
          (error)=>{
            throw new error ('Hubo un error')
          }
       
      )
    
        
      }, [])
      

    return (

        <div>
            <h3>{prodnom}</h3>        

            <ItemList
              items={productos}
            />
        </div>           
      
        
    )


}

export default ItemListContainer
