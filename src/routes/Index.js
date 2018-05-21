// Products.js
// Created by fanyingmao 五月/15/2018
//
import React from 'react';
import { Button ,Icon} from 'antd';

const Products = ({dispatch, products}) => {
  return (
    <div>
      <h2>List of products</h2>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Icon type="plus-circle" />
        <Icon type="link" />
      </div>
    </div>
  );
};

export default Products;
