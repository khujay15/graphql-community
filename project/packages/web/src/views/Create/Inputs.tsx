import React from 'react';
import { Form } from 'antd';

export default function Inputs({ forms }) {
  return (
    <>
      {forms.map(({ form, input: { Item, value, ...rest } }) => (
        <Form.Item {...form} required key={value}>
          <Item placeholder={value} name={value} {...rest} />
        </Form.Item>
      ))}
    </>
  );
}
