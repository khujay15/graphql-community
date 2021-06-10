//@ts-nocheck

import React from 'react';
import { Table as TableContainer, TableProps } from 'antd';
import { useWindowSize } from '@src/hooks';
import TableHeader from './TableHeader';

interface NewTableProps extends TableProps<any> {
  title: string;
  columns: Object[];
  data: Object[];
}

export default function Table({
  title,
  columns,
  data,
  ...rest
}: NewTableProps) {
  const [width, height] = useWindowSize();

  const size = width > 1000 ? 'middle' : 'small';
  const cellHeight = size === 'small' ? 39 : 55;
  const pageSize = Math.ceil((height * 2) / 3 / cellHeight);

  const emptyRowNum = pageSize - (data.length % pageSize);
  const emptyRow = columns.reduce(
    (acc, curr) => ((acc[curr['dataIndex']] = '-'), acc),
    {},
  );

  const body = [...data, ...Array(emptyRowNum || 0).fill(emptyRow)];

  return (
    <TableContainer
      size={size}
      title={() => <TableHeader title={title} />}
      columns={columns}
      dataSource={body}
      pagination={{
        responsive: true,
        showLessItems: true,
        pageSize,
      }}
      {...rest}
    />
  );
}
