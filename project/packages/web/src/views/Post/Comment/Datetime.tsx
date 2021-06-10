import React from 'react';
import { Tooltip } from 'antd';
import moment from 'moment';

export default function Datetime({ created_date }) {
  return (
    <Tooltip title={moment(created_date).format('YYYY-MM-DD HH:mm:ss')}>
      <span>{moment(created_date).fromNow()}</span>
    </Tooltip>
  );
}
