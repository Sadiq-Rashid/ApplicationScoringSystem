import React from 'react';
import { Layout, theme } from 'antd';

const { Header } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: 0,
        background: 'rgb(212 216 225 / 50%'
       
      }}
    />
  );
};

export default Navbar;
