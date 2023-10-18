import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Layout, Menu } from 'antd';
// import cartStore from '../store/CartStore';
import { useCartStore } from '../store/CartStore';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
    const navigate = useNavigate();
    const cartStore = useCartStore();

    function handleCart(){
      navigate('/shoppingcart')
    }
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Heading */}
      <div style={{ color: 'white', fontSize: '20px', cursor:'pointer' }} onClick={()=> navigate('/')}>
        INSTADUKAN
      </div>

      {/* Shopping Cart */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['cart']} style={{ flexGrow: 0 }}>
        <Menu.Item key="cart" style={{ marginLeft: 'auto' }}>
          <a href="/cart">
            <Badge count={cartStore.cartItems.length} style={{ backgroundColor: '#52c41a' }}>
              <ShoppingCartOutlined style={{ fontSize: '24px' }} onClick={handleCart}/>
            </Badge>
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
