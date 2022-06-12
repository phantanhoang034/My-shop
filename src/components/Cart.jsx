import React from 'react'

const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart-cart'>
                <div className='cart-image'>
                    <img src="https://routine.vn/static/version1652808531/frontend/Magenest/routine_desktop/vi_VN/images/cart_empty.svg" alt="" />
                </div>
                <ul>
                    <li>GIỎ HÀNG TRỐNG RỖNG</li>
                    <li>Bạn không có sản phẩm nào trong giỏ hàng</li>
                </ul>
            </div>
        </div>
    )
}

export default Cart