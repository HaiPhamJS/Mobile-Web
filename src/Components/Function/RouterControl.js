import React from 'react';

import Home from '../Home/Home';
import Iphone from '../Iphone/Iphone';
import ListProduct from '../ListProduct.js/ListProduct';
import Login from '../Login/Login';
import Search from '../Search/Search';

const Router =  [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/list-product',
        exact: false,
        main: () => <ListProduct />
    },
    {
        path: '/home',
        exact: false,
        main: () => <Home />
    },
    {
        path: '/iphone',
        exact: false,
        main: () => <Iphone />
    },
    {
        path: '/product',
        exact: false,
        main: () => <Search />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    }
]

export default Router
