import React, { useEffect, useState } from 'react';
import {getFIrestore, doc,getDocs  } from "fire/firestore";
import ItemDetail from '../ItemDetail';
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => { 
    const [data, setData] = useState({});
    const {detalleId} = useParams();

useEffect(() => {
    const querydb = getFIrestore ();
    const queryDoc = doc (querydb,'products', detalleId)
    getDocs(queryDoc)
    .then(res =>setData({id: res.id, ...res.data()}))
},[detalleId])

return (

<ItemDetail data={data} />
)
}

export default ItemDetailcontainer;
