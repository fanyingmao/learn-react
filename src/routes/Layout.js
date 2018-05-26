// Flex.js
// Created by fanyingmao 五月/20/2018
//
import { Layout } from 'antd';
import {connect} from 'dva';

const { Header, Footer, Sider, Content } = Layout;


const mLayout = () => {

  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>);
};


export default connect()(mLayout);
