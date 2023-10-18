import React, { useState } from 'react';
import { Avatar, Card, Button, Space } from 'antd';
import cartStore from '../store/CartStore';
import { useCartStore } from '../store/CartStore';
import PassengerInfo from './PassengerInfo';

const { Meta } = Card;

const Product = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const cartStore = useCartStore();
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  return (
    <>
      <Card
        cover={<img alt="example" src={item.image} style={{ height: "200px" }} />}
        actions={[
          <Space>
            <span>Rs{1200}</span>
            <Button type='primary' key="add-to-cart" onClick={handleOpenModal}>
              Add to Cart
            </Button>
          </Space>
        ]}
      >
        <Meta
          avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaba7fd-uv6amExdRSN0EayvIvgJY5XKohUg&usqp=CAU" />}
          title={item.title}
          description={item.description}
        />
      </Card>
      <PassengerInfo visible={modalVisible} onCancel={handleCloseModal} />
    </>
  );
};

export default Product;
