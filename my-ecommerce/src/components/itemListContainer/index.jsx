import React from "react";
import {getFIrestore, collecti,getDocs,query, where  } from "fire/firestore";
import itemList from "../ItemList";
import react, { useState,useEffect} from "react";
import tittle from "../Tittle";
import { useParams } from "react-router-dom";
export const ItemListcontainer = ({texto}) => {
    const [data,setData] = useState([]);
    const {categoriaId} = useParams();
    useEffect (() => {
      const querydb=getFIrestore();
      const queryCollection = collection(querydb, 'products');
      if(categoriaId){
      const queryFilter = query(queryCollection,where('category', '==', categoriaId))
      getDocs(queryFilter)
      .then(res => setData( res.docs.map(products => ({id: product.id, ...product.data()}))))
      } else{
        getDocs(queryCollection)
        .then(res => setData( res.docs.map(products => ({id: product.id, ...product.data()}))))
      }
      }, [categoriaId])

    
    return ( 
        <>
       <tittle greeting={texto}/>
       
       <itemList data={data}/>
       </>
    );
    

}
export default ItemListcontainer