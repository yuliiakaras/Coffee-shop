

const Product = (props) => {

    const {name, country, price, img} = props;

    return (
        <div className="items__item">
            <div className="items__item__img">
                <img src={img} alt="coffee-1"/>
            </div>
            <div className="items__item__info">
                <h3 className="items__item__title">
                    {name}
                </h3>
                <h3 className="items__item__price">{price}$</h3>
            </div>
        </div>
    )
}

export default Product;