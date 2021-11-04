import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <footer className="container-fluid" style={{ "marginTop": "70px" }}>
                    <div className="row mb-3">
                        <div className="col-md-4 d-flex">
                            <div className="footer_icon pb-3">
                                <i className="fas fa-mobile-alt" />
                            </div>
                            <div className="footer_text">
                                <p className="mb-0 text-white-50">Liên lạc qua số điện</p>
                                +0123456789
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="footer_icon pb-3">
                                <i className="far fa-envelope" />
                            </div>
                            <div className="footer_text">
                                <p className="mb-0 text-white-50">Giúp đỡ trực tuyến</p>
                                phones9999@gmail.com
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="footer_icon pb-3">
                                <i className="far fa-map" />
                            </div>
                            <div className="footer_text">
                                <p className="mb-0 text-white-50">Địa Chỉ</p>
                                319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 fullScreen" style={{ "backgroundColor": "#444343" }}>
                        <div className="container flex">
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <h4 className="text-capitalize">social media</h4>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <ul className="social-icon d-flex">
                                    <li><i className="fab fa-facebook-f" /></li>
                                    <li><i className="fab fa-instagram" /></li>
                                    <li><i className="fab fa-google" /></li>
                                    <li><i className="fab fa-twitter" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{height: '80px'}}>

                    </div>
                    <div className="row info d-md-flex justify-content-center container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <h4>Thông Tin Về Shop</h4>
                                <p className="text-secondary">Đây là trang web bán hàng trực tuyến chuyên về các hãng điện thoại phổ biến trên thị trường,và được đánh giá Là một cửa hàng điện thoại hàng đầu Việt Nam, chúng tôi cam đoan chất lượng, giá thành và dịch vụ hỗ trợ
                                    tốt nhất đến khách hàng!</p>
                            </div>
                            <div className="col-lg-4 d-md-flex justify-content-lg-center ">
                                <div>
                                    <h4>Sản Phẩm</h4>
                                    <ul>
                                        <li>Điện thoại thông minh</li>
                                        <li>latop</li>
                                        <li>Sản phẩm liên quan</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 d-md-flex justify-content-lg-center">
                                <div>
                                    <h4>Liên Kết Nhanh</h4>
                                    <ul>
                                        <li>Tài khoản của bạn</li>
                                        <li>Trở thành một người giới thiệu</li>
                                        <li>Tạo tài khoản</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
