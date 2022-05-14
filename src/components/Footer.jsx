import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='box-cointaner'>
                <div className='box'>
                    <h1> THAM GIA BẢNG TIN CỦA CHÚNG TÔI</h1>
                    <input placeholder='Nhập email của bạn' />
                    <i className='far fa-envelope'></i>
                    <p> CÔNG TY TNHH ROUTINE VIETNAM |        Mã Số Thuế: 0106486365</p>
                    <p>Văn Phòng: Tầng 10 Tòa Nhà IMC</p>
                    <p> 62 Trần Quang Khải, Phường Tân Định, Quận 1, Tp.HCM</p>
                    <span>FACEBOOK</span>
                    <span>INSTARGRAM</span>
                    <img src='http://online.gov.vn/Home/WebDetails/52818'/>

                </div>
                <div className='box'>
                    <h1> CÔNG TY</h1>
                     <p> Giới thiệu về ROUTINE</p>
                     <p> Tuyển dụng</p>
                     <p> Tin tức</p>
                     <p> Chăm sóc khách hàng</p>
                     <p> Liên hệ</p>


                </div><div className='box'>
                <h1> CHÍNH SÁCH KHÁCH HÀNG</h1>
                     <p> Chính sách khách hàng thân thiết</p>
                     <p> Chính sách đổi và trả hàng</p>
                     <p> Chính sách bảo hành</p>
                     <p> Chính sách bảo mật</p>
                     <p>Các câu hỏi thường gặp</p>

                </div><div className='box'>
                <h1> CHÍNH SÁCH KHÁCH HÀNG</h1>
                     <p> CỬA HÀNG THỨ 29</p>
                     <p> 14-16 Quốc Hương, Phường Thảo Điền, Quận 2</p>
                     <p> CỬA HÀNG THỨ 28</p>
                     <p> Tầng 2, T-231, Aeon Hà Đông</p>
                     <p> Khu dân cư Hoàng Văn Thụ, Phường Dương Nội, Quận Hà Đông, Hà Nội</p>
                     <a> Xem tất cả các cửa hàng</a>
                </div>
            </div>
        </div>
    )
}

export default Footer