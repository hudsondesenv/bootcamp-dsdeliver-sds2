
import { checkIsSelected } from './helpers';
import ProductCard from './ProductCard';
import { Product } from './types';

type Props = {
    products: Product[];
    seletedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProdutctsList({products, seletedProducts,  onSelectProduct}: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
              { products.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(seletedProducts, product)}
                    />
              )) }
            </div>
        </div>
    )
}

export default ProdutctsList;