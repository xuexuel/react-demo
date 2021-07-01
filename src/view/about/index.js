
import React from 'react'
import { inner } from './data';
import { Card } from 'antd';

function AboutView() {
  return <Card
    title={<h1>关于</h1>}
    type="inner">
    <div dangerouslySetInnerHTML={{
      __html: inner
    }}></div>
  </Card>
}

export default AboutView;