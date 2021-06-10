import React from 'react';
import { Button } from 'antd';

export default function Buttons({ buttons }) {
  return (
    <div>
      {buttons.map(({ title, ...rest }) => (
        <Button key={title} {...rest}>
          {title}
        </Button>
      ))}
    </div>
  );
}
