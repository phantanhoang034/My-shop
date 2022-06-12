import React from 'react'



const BannerLogin = () => {
  return (
    <div className='bannerlogin'>
      <div className='bannerlogin-login'>
        <h3>ĐĂNG NHẬP</h3>
        <input placeholder='Địa chỉ email hoặc số điện thoại' /> <br />
        <input placeholder='Mật khẩu' />
        <p>Bạn quên mật khẩu?</p>
        <p>Bạn chưa có tài khoản?  <a href='/'>Đăng ký</a></p>
        <button>
          <span>ĐĂNG NHẬP</span>
        </button>
        </div>
    
    
      
       
      </div>
  )
}

export default BannerLogin