import React from 'react';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Product from '../Reuse/Product';

const Search = () => {

    const [datas, setdatas] = useState([])

    useEffect(() => {
        fetch('http://103.163.119.33:8080/product/api/Allprodroduct')
            .then(res => res.json())
            .then(datas => {
                setdatas(datas)
            })
    }, []);

    const [value, setValue] = useState([0, 10000000]);//Tìm kiếm theo giá
    const [searchName, setsearchName] = useState(' ');// Tìm kiếm theo tên
    const [sort, setsort] = useState(true);//Giá thấp, giá cao
    const [category, setcategory] = useState('all');//Tìm kiếm theo danh mục
    const [origin, setorigin] = useState('all');//Tìm kiếm theo xuất sứ
    const [sale, setsale] = useState(true);//Tìm kiếm theo khuyến mãi

    let listPro;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOnchaneInput = (e) => {
        setsearchName(e.target.value.toLowerCase());
    }

    function valuetext(value) {
        return `${value}°C`;
    }

    const catChuoi = (string) => {
        let countString = string.length;
        let subString1 = string.substring(countString - 3, countString)
        let subString2 = string.substring(countString - 6, countString - 3)
        let subString3 = string.substring(0, countString - 6)
        return `${subString3}.${subString2}.${subString1}`
    }

    const onHandleReset = () => {
        setValue([0, 10000000]);
        setsearchName(' ');
        setsort(true);
        setcategory('all');
        setorigin('all');
        setsale(true);
    }

    let i = 0;
    const listCategory = ['Appl', 'Samsung ', 'OPPO Electronics Corp', 'Xiaomi'];
    const listOrigi = ['american', 'korea', 'china'];
    let selectCate = '';
    let selectOrigin = '';
    let selectSale = 0;

    switch (category) {
        case 'iphone':
            selectCate = listCategory[0]
            break;
        case 'samsung':
            selectCate = listCategory[1]
            break;
        case 'oppo':
            selectCate = listCategory[2]
            break;
        case 'xiaomi':
            selectCate = listCategory[3]
            break;
        default:
            selectCate = ''
            break;
    }

    switch (origin) {
        case 'korea':
            selectOrigin = listOrigi[0]
            break;
        case 'usa':
            selectOrigin = listOrigi[1]
            break;
        case 'china':
            selectOrigin = listOrigi[2]
            break;
        default:
            selectOrigin = ''
            break;
    }

    if (sale) {
        selectSale = 0;
    } else {
        selectSale = 1;
    }

    if(sort) {
        datas.sort((a,b) => {
            let agia = a.price * (1 - a.saleoff / 100);
            let bgia = b.price * (1 - b.saleoff / 100);
            return agia - bgia;
        })
    } else {
        datas.sort((a,b) => {
            let agia = a.price * (1 - a.saleoff / 100);
            let bgia = b.price * (1 - b.saleoff / 100);
            return bgia - agia;
        })
    }

    listPro = datas.map((product, index) => {
        let gia = product.price * (1 - product.saleoff / 100);
        if (product.productname.toLowerCase().includes(searchName)
            && product.producerName.includes(selectCate)
            && product.address.toLowerCase().includes(selectOrigin)
            && gia >= value[0]
            && gia <= value[1]
            && product.saleoff >= selectSale
        ) {
            i++;
            return <div
                className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-4"
                key={product.id}>
                <Link to={`/product-detail-${product.id}`} className="hovera">
                    <Product data={product} key={index} />
                </Link>
            </div>
        } else {
            return ''
        }
    })

    return (
        <div className="container mt30">
            <TextField
                id="outlined-basic"
                label="Tìm sản phẩm mong muốn..."
                variant="outlined"
                autoFocus
                fullWidth
                onChange={(e) => handleOnchaneInput(e)} />
            <div className="flex mt30">
                <div className="search-left">
                    <div className="search-nav">
                        <h4><i className="fa fa-navicon"></i>  Danh mục sản phẩm</h4>
                        <hr />
                        <ul>
                            <li
                                className={category === 'all' ? 'txtPri bold' : ''}
                                onClick={() => setcategory('all')}>
                                Tất cả
                            </li>
                            <li
                                className={category === 'iphone' ? 'txtPri bold' : ''}
                                onClick={() => setcategory('iphone')}>
                                Iphone
                            </li>
                            <li
                                className={category === 'samsung' ? 'txtPri bold' : ''}
                                onClick={() => setcategory('samsung')}>
                                Samsung
                            </li>
                            <li
                                className={category === 'oppo' ? 'txtPri bold' : ''}
                                onClick={() => setcategory('oppo')}>
                                Oppo
                            </li>
                            <li
                                className={category === 'xiaomi' ? 'txtPri bold' : ''}
                                onClick={() => setcategory('xiaomi')}>
                                Xiaomi
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <Slider
                            getAriaLabel={() => 'Price'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            max={30000000}
                            min={0}
                            step={1000000}
                            className="mt30"
                        />
                        <span>Khoảng giá: <br />
                            <b
                                style={{
                                    color: 'rgba(2, 126, 251, 1)'
                                }}>
                                {value[0] === 0
                                    ? 0
                                    : catChuoi(value[0].toString())}đ
                                - {catChuoi(value[1].toString())}đ
                            </b>
                        </span>
                        <hr />
                        <div style={{ cursor: 'pointer' }} className="search-left-sort flex">
                            <button
                                className={sort ? 'backPri' : ''}
                                onClick={() => setsort(true)}>Giá tăng dần</button>
                            <button
                                className={sort === false ? 'backPri' : ''}
                                onClick={() => setsort(false)}>Giá giảm dần</button>
                        </div>
                        <hr />
                        <div className="search-nav">
                            <h5>Xuất sứ</h5>
                            <ul>
                                <li
                                    className={origin === 'all' ? 'txtPri bold' : ''}
                                    onClick={() => setorigin('all')}
                                >
                                    Tất cả
                                </li>
                                <li
                                    className={origin === 'korea' ? 'txtPri bold' : ''}
                                    onClick={() => setorigin('korea')}
                                >
                                    Hàn Quốc
                                </li>
                                <li
                                    className={origin === 'usa' ? 'txtPri bold' : ''}
                                    onClick={() => setorigin('usa')}
                                >
                                    Mỹ
                                </li>
                                <li
                                    className={origin === 'china' ? 'txtPri bold' : ''}
                                    onClick={() => setorigin('china')}
                                >
                                    Trung Quốc
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="search-nav">
                            <h5>Giảm giá</h5>
                            <ul>
                                <li
                                    className={sale ? 'txtPri bold' : ''}
                                    onClick={() => setsale(true)}>
                                    Tất cả
                                </li>
                                <li
                                    className={sale === false ? 'txtPri bold' : ''}
                                    onClick={() => setsale(false)}>
                                    Đang giảm giá
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="mt30">
                            <button 
                                type="button" 
                                className="btn btn-success form-control"
                                onClick={() => onHandleReset()}
                                >Xóa tất cả</button>
                        </div>
                    </div>
                </div>
                <div className="search-right">
                    <div className="mt30 row">
                        {listPro}
                        {i === 0 ? 'Không có kết quả trả về' : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
