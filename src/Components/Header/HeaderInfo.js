import React from 'react';
import { Link } from 'react-router-dom';

const HeaderInfo = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="top__header">
                    <div className="top__left">
                        <div className="left__map">
                            <i className="fa fa-map-marker"></i>
                            <span>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</span>
                        </div>
                        <div className="left__phone">
                            <i className="fa fa-phone"></i>
                            <span>076 922 0162</span>
                        </div>
                    </div>
                    <div className="top__contact">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
                </div>
                <div className="top__wrap">
                    <div className="row aa">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 wrapper__img">
                            <img src="https://i.ibb.co/tzwt7YM/a.png" alt="lỗi" style={{ width: '100%' }} />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 wrapper__search">
                            <Link 
                                to="/product" 
                                style={{ width: '100%', justifyContent: 'flex-end', display: 'flex', position: 'relative' }} 
                                className="hovera"
                                >
                                <input
                                    type="search"
                                    className="wrapper__menu__search"
                                    id="input-search"
                                    placeholder="Tìm sản phẩm mong muốn..."
                                    disabled={false}
                                    style={{color: 'white'}}
                                />

                                <i className="fa fa-search menu__search--icon" style={{position: 'unset', right: '0', color: 'white'}} ></i>
                            </Link>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 wrapper__user">
                            <i className="fa fa-user menu__user--icon" aria-hidden="true"></i>
                            <span className="menu__user">Tài khoản</span>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 wrapper__cart">
                            <i className="fa fa-shopping-cart menu__cart--icon" aria-hidden="true"></i>
                            <span className="menu__cart">Giỏ hàng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo
