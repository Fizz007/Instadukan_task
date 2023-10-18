import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Product from "./Product";
import { ferry } from "../data";

const Home = () => {
 
  return (
    <div>
      <h1>Ferry Products</h1>
      <Row gutter={12}>
        {ferry &&
          ferry.map((product, index) => (
            <Col span={8} key={index} style={{ paddingBottom: "1rem" }}>
              <Product item={product} key={index}/>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Home;
