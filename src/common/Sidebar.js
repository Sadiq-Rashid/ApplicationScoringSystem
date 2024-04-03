import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function getItem(label, key, icon, children, url) {
  return {
    key,
    icon,
    children,
    label,
    url
  };
}

const items = [
  getItem('Dashboard', '1', <PieChartOutlined />, null, '/main/dashboard'),
  getItem('Profile', '2', <DesktopOutlined />, null, '/main/profile'),
  getItem('Application', 'sub1', <UserOutlined />, [
    getItem('New application', '3', null, null, '/main/application'),
    getItem('Submitted', '4', null, null, '/main/applications'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6', null, null, '/team1'),
    getItem('Team 2', '8', null, null, '/team2'),
  ]),
  getItem('Files', '9', <FileOutlined />, null, '/files'),
];

const renderMenuItems = (items) => {
  return items.map(item => {
    if (item.children) {
      return (
        <SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.url}>{item.label}</Link>
        </Menu.Item>
      );
    }
  });
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {renderMenuItems(items)}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
