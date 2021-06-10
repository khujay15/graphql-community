import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TableHeader({ title }) {
  const { query } = useRouter();

  return (
    <div className={'ant-table-title'}>
      <h2>{title} 게시판</h2>
      <Button>
        <Link href={`/${query.name}/create`}>{'글쓰기'}</Link>
      </Button>
    </div>
  );
}
