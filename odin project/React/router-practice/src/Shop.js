import React, {useEffect,useState} from "react";
import './App.css';
import {Link} from 'react-router-dom';

const Shop = () => {

    useEffect(() => {
        fetchItems();
    },[]);


    const [items,setItems] = useState([

    ]);

    const fetchItems = async () => {
        const myData = await fetch(
            'https://fortnite-api.theapinetwork.com/upcoming/get'
        );

        const items = await myData.json();
    console.log(items);
    console.log(items.data);

    setItems(items.data);

    }
    return(
        <div>
          {items.map(item => (
             <h3 className="items"key={item.itemId}>
                 <Link to={`/shop/${item.itemId}`}>{item.item.name}
             </Link>
             </h3>  
              ))}
                </div>
    );
}
export default Shop;
