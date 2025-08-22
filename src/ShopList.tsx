//Build component
//import the JSON file
//Loop through all the stores & Display them on a list
import data from './shops.json';

interface Shop{
    name: string;
    address:{
        street: string;
        unit: string|null;
        city: string;
        state: string;
        zip: number;
    };
    website: string;
}
function ShopList(){
    const shopsListed = data.shops.map((shop: Shop) =>{
        return <div>
            {shop.name}
            {shop.address.street}
            {shop.address.unit}
            {shop.address.city}
            {shop.address.state}
            {shop.address.zip}
        </div>
    })

    return (<div>{shopsListed}</div>)
    console.log(shopsListed)
}
export default ShopList;
