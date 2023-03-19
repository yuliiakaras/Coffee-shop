import './products-list.css'
import '../basic/reset.css'
import '../basic/basic.css'

import products from "../basic/products.js";
import Product from "../product-elem/product.js";
const ProductsList = () => {

    const elements = products.map(item => {
        const {id, best, ...itemProps} = item;
        if(best) {
            return (
            <Product 
            key = {id}
            {...itemProps}
            />
        )
        }
        
    })

    return (
        <section className="offer">
            <div className="container">
                <h2 className="offer__title">Our best</h2>
                <div className="items__wrapper">
                    {elements}
                </div>
            </div>
        </section>
    )
}

export default ProductsList;