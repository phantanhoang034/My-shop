import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='box-cointaner'>
                <div className='box'>
                    <h1> THAM GIA BẢNG TIN CỦA CHÚNG TÔI</h1>
                    <input placeholder="NHẬP EMAIL CỦA BẠN" />
                    <i className='far fa-envelope'></i>
                    <p> CÔNG TY TNHH ROUTINE VIETNAM</p>
                    <p>CÔNG TY TNHH ROUTINE VIETNAM |         Mã Số Thuế: 0106486365</p>
                    <p>Văn Phòng: Tầng 10 Tòa Nhà IMC</p>
                    <p> 62 Trần Quang Khải, Phường Tân Định, Quận 1, Tp.HCM</p>
                    <p>
                        <a href="https://www.facebook.com/routinevn" > FACEBOOK</a>
                        <a href="https://www.instagram.com/routine_official/"> INSTARGRAM</a>
                    </p>

                    <p>
                        <img src="https://routine.vn/media/wysiwyg/dang-ky-website-thuong-mai-dien-tu-1024x388-1024x388.png" />
                    </p>


                </div>
                <div className='box'>
                    <h2> CÔNG TY</h2>
                    <p><Link to="/" className='click'> Giới thiệu về ROUTINE</Link></p>
                    <p><Link to="/" className='click'> Tuyển dụng</Link></p>
                    <p><Link to="/" className='click'> Tin tức</Link></p>
                    <p><Link to="/" className='click'> Chăm sóc khách hàng</Link></p>
                    <p><Link to="/" className='click'> Liên hệ</Link></p>
                </div>
                <div className='box'>
                    <h2> CHÍNH SÁCH KHÁCH HÀNG</h2>
                    <p><Link to='/' className='click'> Chính sách khách hàng thân thiết</Link></p>
                    <p><Link to='/' className='click'> Chính sách đổi và trả hàng</Link></p>
                    <p><Link to='/' className='click'> Chính sách bảo hành</Link></p>
                    <p><Link to='/' className='click'> Chính sách bảo mật</Link></p>
                    <p><Link to='/' className='click'>Các câu hỏi thường gặp</Link></p>
                </div>
                <div className='box'>
                    <h2> THÔNG TIN CỬA HÀNG </h2>
                    <h3> CỬA HÀNG THỨ 29</h3>
                    <p> 14-16 Quốc Hương, Phường Thảo Điền, Quận 2</p>
                    <h3> CỬA HÀNG THỨ 28</h3>
                    <p> Tầng 2, T-231, Aeon Hà Đông</p>
                    <p> Khu dân cư Hoàng Văn Thụ, Phường Dương Nội, Quận Hà Đông, Hà Nội</p>

                    <p>
                        <a href="https://routine.vn/maplist"> Xem tất cả cửa hàng</a>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer