import React from 'react';
import { Card, Descriptions } from 'antd';
import moment from 'moment';

export default function Content({
  author,
  created_date,
  title,
  content,
}) {
  return (
    <Card className={'post-content'}>
      <Descriptions title={title} layout={'horizontal'} column={3}>
        <Descriptions.Item label={'작성자'} span={3}>
          {author}
        </Descriptions.Item>
        <Descriptions.Item
          label={'작성일'}
          span={3}
          style={{ textAlign: 'right' }}
        >
          {moment(created_date).format('YYYY.MM.DD HH:mm:ss')}
        </Descriptions.Item>
        <Descriptions.Item label={'게시글'} span={3}>
          <br />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
