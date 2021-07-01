import React from 'react'
import { Layout, Row, Col } from 'antd';
import Nav from './nav';
import { navs } from '../router';
import { Link } from 'react-router-dom';

function Header() {
  return <Layout.Header>
    <div className="wrap">
      <Row>
        <Col span={4}>
          <h1 id="logo"><Link to="/">CNode</Link></h1>
        </Col>
        <Col span={20}>
          <Nav
            data={navs}
            theme="dark"
            selected={({ pathname }) => {
              let key = navs.findIndex(item => {
                if (pathname === item.to) {
                  return true;
                }
                return false;
              })
              return key + "";
            }}
          />
        </Col>

      </Row>
    </div>
  </Layout.Header>
}
export default Header;