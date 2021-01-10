
import './styles.css';

import StepesHeader from './StepsHeader';
import ProdutctsList from './ProductsList';
import OrderLocation from './OrderLocation';

import { useEffect, useState } from 'react';

import { OrderLocationdata, Product } from './types';
import { FechProdutcs } from '../Api';


function Orders(){

const [products, setProduct] = useState<Product[]>([]);
const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {   
        FechProdutcs()
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
       <div className="orders-container">
           <StepesHeader />
           <ProdutctsList products={products}/>
           <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
       </div>
    )
}

export default Orders;