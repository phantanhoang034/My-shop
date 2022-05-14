import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <ul>
                    <li>
                        <Link to="/Boy" className='link-color'>
                            NAM
                        </Link>
                    </li>
                    <li>
                        <Link to="/Girl" className='link-color'>
                            NỮ
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='link-color'>
                            NEW ARRIVALS
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='link-color'>
                            COLLECTION
                        </Link>
                    </li>
                    <li >
                        <Link to="/" className='color-text'>
                            SUMMER SALE
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='logo'>
                <Link to="/">
                    <img src='https://routine.vn/media/logo/websites/1/ezgif-7-ee007e6332a0_2x.png' />
                </Link>

            </div>
            <div className='header-right'>
                <input placeholder='TÌM SẢN PHẨM' type="search" />
                <ul >
                    <li >
                        <Link to="/Login" className='link-color'>
                            ĐĂNG NHẬP
                        </Link></li>
                    <li >
                        <Link to="/" className='link-color'>
                            TRỢ GIÚP
                        </Link></li>
                    <li >
                        <Link to="/" className='link-color'>
                            GIỎ HÀNG
                        </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header