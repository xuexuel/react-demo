import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { useGetTopic } from '../../store/action';
import {Card} from 'antd';

function TopicView() {
  const { loading, data } = useSelector(state => state.topic);
  const getTopic = useGetTopic();
  const { id } = useParams();
  useEffect(() => {
    getTopic(id);
  },[id]);
  return <Card
    title={data.title}
    loading={loading}
  >
    <div dangerouslySetInnerHTML={{
      __html:data.content
    }}></div>
  </Card>
}

export default TopicView;