import React from 'react'
import { inner } from './data';
import { Card } from 'antd';

function APIView() {
  return <Card
    title={<h1>API</h1>}
    type="inner">
    <div dangerouslySetInnerHTML={{
      __html: inner
    }}></div>
  </Card>
}

export default APIView;