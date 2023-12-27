import React from 'react';
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// Main component representing the application layout
const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={80} theme="dark">
        <div style={{ height: '32px', backgroundColor: '#fff', margin: '16px' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<PieChartOutlined />} />
          <Menu.Item key="2" icon={<DesktopOutlined />} />
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* Header content */}
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {/* Breadcrumb */}
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* Main content */}
          <Outlet></Outlet>.
        </Content>
        {/* Footer content */}
        <Footer style={{ textAlign: 'center' }}>Job Search Academy ©2024 Created by Sana Hardeep</Footer>
      </Layout>
    </Layout>
  );
};

export default App;