import React from 'react'

const Product = (props) => {

    const product = props.data;

    const catChuoi = (string) => {
        let countString = string.length;
        let subString1 = string.substring(countString - 3, countString)
        let subString2 = string.substring(countString - 6, countString - 3)
        let subString3 = string.substring(0, countString - 6)
        return `${subString3}.${subString2}.${subString1}`
    }

    let gia = product.price * (1 - product.saleoff / 100);
    let priceString = `${product.price}`;
    let giaString = `${gia}`
    let renderPrice = catChuoi(priceString);
    let renderGia = catChuoi(giaString);

    return (
        <div className="card card__product">
            <div className="card__product-img">
                <img src={'http://103.163.119.33:8080/uploads/' + product.imageurl} alt="Lỗi" />
            </div>
            <div className="card-body">
                <h5 className="card__product-title">{product.productname}</h5>
                <div className="card__product-price">
                    <span className="card__product-price-old">{renderPrice}&#8363; </span>
                    <span className="card__product-price-current bold">{renderGia}&#8363; </span>
                </div>
                <div className="frame">
                    <button
                        className="btn rounded-pill btn-order-product"
                        style={{ color: 'white' }}
                    >
                        <i className="fas fa-eye"></i> Chi tiết
                    </button>
                </div>
            </div>
            {product.saleoff > 0 ? <div className="card-discout">
                {product.saleoff}%
            </div> : ''}
        </div>
    )
}

export default Product
