// Flex.js
// Created by fanyingmao 五月/20/2018
//
import { Layout } from "antd";
import { connect } from "dva";
import { Link, Redirect, Switch, Route } from "dva/router";
const { Header, Footer, Sider, Content } = Layout;

const mLayout = () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Link to="/Products">
          <Footer>Footer</Footer>
        </Link>
      </Layout>
    </div>
  );
};

export default connect()(mLayout);
