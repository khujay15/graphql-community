import Table from './Table';
import {
  makeArticleURLWithNumber,
  makeCategoryTableBody,
} from '@shared/functions';
import { useRouter } from 'next/router';

export default function Category({ category, articleList }) {
  const router = useRouter();

  // example
  const newData = makeCategoryTableBody(articleList);

  const handleRoute = ({ id }) => (e) => {
    e.preventDefault();

    if (id === '-') return;

    const {
      query: { name: categoryName },
    } = router;
    const URL = makeArticleURLWithNumber(categoryName as string, id);

    router.push(URL);
  };

  return (
    <div className={'outer-container category-table-container'}>
      <Table
        title={category}
        columns={[
          {
            key: '1',
            title: 'No.',
            dataIndex: 'id',
            align: 'center',
          },
          { key: '2', title: '제목', dataIndex: 'title', width: '70%' },
          {
            key: '3',
            title: '작성자',
            dataIndex: 'author',
            align: 'center',
          },
          {
            key: '4',
            title: '등록일',
            dataIndex: 'created_date',
            align: 'center',
          },
        ]}
        data={newData}
        onRow={(record) => ({
          onClick: handleRoute(record),
        })}
      />
    </div>
  );
}
