import React, {useEffect,useState} from "react";
import './App.css';

const Item = ({match}) => {

    useEffect(() => {
        fetchItem();
    },[]);
    //console.log(match);


    const [item,setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
      const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);

const item = await fetchItem.json();
console.log(item);
console.log(item.data.item.name);
setItem(item.data.item);

    }
    return(
        <div className="itemDetails">
         <h2>{item.name}</h2>
         <p>{item.description}</p>
         <img src={item.images.icon}alt=""></img>
                </div>
    );
}
export default Item;
