import React, { createElement } from 'react';
import { Tooltip } from 'antd';
import { DislikeOutlined, DislikeFilled } from '@ant-design/icons';

export default function Dislike({ dislike, action, dislikes }) {
  return (
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>
  );
}
