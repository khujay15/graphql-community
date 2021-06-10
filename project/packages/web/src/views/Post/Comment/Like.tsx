import React, { createElement } from 'react';
import { Tooltip } from 'antd';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';

export default function Like({ action, like, likes }) {
  return (
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>
  );
}
