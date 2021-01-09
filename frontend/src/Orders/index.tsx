
import './styles.css';

import StepesHeader from './StepsHeader';
import ProdutctsList from './ProductsList';

import { useEffect, useState } from 'react';

import { Product } from './types';
import { FechProdutcs } from '../Api';

function Orders(){

const [products, setProduct] = useState<Product[]>([]);


useEffect(() => {   
    FechProdutcs()
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
}, []);

    return (
       <div className="orders-container">
           <StepesHeader />
           <ProdutctsList products={products}/>
       </div>
    )
}

export default Orders;