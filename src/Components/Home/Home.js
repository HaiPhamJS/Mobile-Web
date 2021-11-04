import React from 'react';
import { useState, useEffect } from 'react';

import BannerSub from './BannerSub';
import Product from '../Reuse/Product';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setdata] = useState([]);
    const [select, setselect] = useState(localStorage.getItem('select') || 'pop');
    const [count, setcount] = useState(16)

    localStorage.setItem('select', select)

    useEffect(() => {
        fetch('http://103.163.119.33:8080/product/api/Allprodroduct')
            .then(res => res.json())
            .then(datas => {
                setdata(datas)
            })
    }, []);

    const listPro = data.map((pro, index) => {
        if (index < count) {
            return <div
                className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3"
                key={pro.id}>
                <Link to={`/product-detail-${pro.id}`} className="hovera">
                    <Product data={pro} key={index} />
                </Link>
            </div>
        } else {
            return ''
        }
    })

    const onHandleSelect = (value) => {
        setselect(value);
        if (value === 'pop') {
            data.sort((a, b) => {
                return a.productname - b.productname
            })
        } else {
            if (value === 'less') {
                data.sort((a, b) => {
                    return a.price - b.price;
                })
            } else {
                data.sort((a, b) => {
                    return b.price - a.price;
                })
            }
        }

    }

    return (
        <div className="container">
            <BannerSub />
            <div className="h50 mt30 home-select">
                <ul className="flex">
                    <li
                        onClick={() => onHandleSelect('pop')}
                        className={select === 'pop' ? 'colorPri' : ''}>
                        Phổ biến
                    </li>
                    <li
                        onClick={() => onHandleSelect('less')}
                        className={select === 'less' ? 'colorPri' : ''}>
                        Giá thấp
                    </li>
                    <li
                        onClick={() => onHandleSelect('more')}
                        className={select === 'more' ? 'colorPri' : ''}>
                        Giá cao
                    </li>
                </ul>
            </div>
            <div className="row mt30">
                {listPro}
            </div>
            {count < data.length ? <div className="viewMore mt30">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setcount(count => count + 8)}
                >Xem thêm</button>
            </div> : ''}
        </div>
    )
}

export default Home
