import React from 'react';
import { Avatar } from 'antd';

export default function Profile({ src, author }) {
  return (
    <Avatar
      src={
        src
          ? src
          : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      }
      alt={author}
    />
  );
}
