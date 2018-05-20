// Products.js
// Created by fanyingmao 五月/15/2018
//
import React from 'react';
import {connect} from 'dva';
import ProductList from '../components/ProductList';
import { Button } from 'antd';

const Products = ({dispatch, products}) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    })
  }
  return (
    <div>
      <h2>List of products</h2>
      <Button type="primary">Primary</Button>
      <ProductList onDelete={handleDelete} products={products}/>
    </div>
  );
};
export default connect(({products}) => ({
  products
}))(Products);
