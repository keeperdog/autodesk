import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'umi';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ClusterOutlined,
  ApartmentOutlined,
} from '@ant-design/icons';
import './index.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function LayoutPage(props: any) {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const [selectedMenuKey, setSelectedMenuKey] = useState<Array<string>>([
    history.location.pathname,
  ]);

  const menuChange = (router: { key: string }) => {
    history.push(router.key);
    console.log(history);
    setSelectedMenuKey([router.key]);
  };

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="dark"
        width={230}
      >
        <div className="logo">
          <img
            src="https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png"
            alt="乾坤"
            title="微前端(qiankun + umi)"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedMenuKey}
          onClick={menuChange}
        >
          <SubMenu key="main" icon={<ClusterOutlined />} title="Main App">
            <Menu.Item key="/main/first">Main app page1</Menu.Item>
            <Menu.Item key="/main/second">Main app page2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub"
            icon={<ApartmentOutlined />}
            title="vue2.0sub applicaton"
          >
            <Menu.Item key="/vue2/">sub applicaton 1_1</Menu.Item>
            <Menu.Item key="/vue2/about">sub applicaton 1_2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<ApartmentOutlined />}
            title="vue3.0 sub applicaton"
          >
            <Menu.Item key="/vue3/">sub applicaton 2_1</Menu.Item>
            <Menu.Item key="/vue3/about">sub applicaton 2_2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="react"
            icon={<ApartmentOutlined />}
            title="react sub applicaton"
          >
            <Menu.Item key="/react/">sub applicaton</Menu.Item>
          </SubMenu>
          <SubMenu
            key="purehtml"
            icon={<ApartmentOutlined />}
            title="Native HTML sub applicaton"
          >
            <Menu.Item key="/purehtml">HTML sub applicaton</Menu.Item>
          </SubMenu>
          {/* http://localhost:8003/ */}
          <SubMenu
            key="umi"
            icon={<ApartmentOutlined />}
            title="Umi sub applicaton"
          >
            <Menu.Item key="/umi">umi sub applicaton</Menu.Item>
          </SubMenu>

          <SubMenu
            key="angular"
            icon={<ApartmentOutlined />}
            title="Angular sub applicaton"
          >
            <Menu.Item key="/angular">Angular sub applicaton</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 10 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
        </Header>
        <Content className="site-layout-content">
          <div className="layout-content_container">{props.children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
