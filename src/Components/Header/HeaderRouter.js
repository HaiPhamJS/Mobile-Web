import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';


const HeaderRouter = () => {

    const [menu, setmenu] = useState(localStorage.getItem('menu') || 'home');
    localStorage.setItem('menu', menu);

    return (
        <div className="container-fluid nenden">
            <div className="container header-router h50">
                <ul className="flex">
                    <li
                        onClick={() => setmenu('home')}>
                        <Link to={"/home"} className={menu === 'home' ? 'white colorPri' : 'white'}>
                            Trang chủ
                        </Link>
                    </li>
                    <li
                        onClick={() => setmenu('product')}>
                        <Link to={"/product"} className={menu === 'product' ? 'white colorPri' : 'white'}>
                            Cửa hàng
                        </Link>
                    </li>
                    <li
                        onClick={() => setmenu('iphone')}>
                        <Link to={"/iphone"} className={menu === 'iphone' ? 'white colorPri' : 'white'}>
                            Iphone
                        </Link>
                    </li>
                    <li
                        onClick={() => setmenu('samsung')}>
                        <Link to={"/samsung"} className={menu === 'samsung' ? 'white colorPri' : 'white'}>
                            Samsung
                        </Link>
                    </li>
                    <li
                        onClick={() => setmenu('oppo')}>
                        <Link to={"/oppo"} className={menu === 'oppo' ? 'white colorPri' : 'white'}>
                            Oppo
                        </Link>
                    </li>
                    <li
                        onClick={() => setmenu('xiaomi')}>
                        <Link to={"/xiaomi"} className={menu === 'xiaomi' ? 'white colorPri' : 'white'}>
                            Xiaomi
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderRouter
