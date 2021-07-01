
import React from 'react'
import { inner } from './data';
import { Card } from 'antd';

function GetstartView() {
  return <Card
    title={<h1>新手入门</h1>}
    type="inner">
    <div dangerouslySetInnerHTML={{
      __html: inner
    }}></div>
  </Card>
}

export default GetstartView;