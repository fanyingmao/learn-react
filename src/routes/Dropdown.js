// Dropdown.js
// Created by fanyingmao 五月/18/2018
//
import {Menu, Dropdown, Icon, message} from 'antd';
import {connect} from 'dva';

const onClick = function ({key}) {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const dropdown = ()=>{
  message.error(`你好！`);
  return(<Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#/products">
      Hover me, Click menu item <Icon type="down"/>
    </a>
  </Dropdown>);
};

export default connect()(dropdown);
