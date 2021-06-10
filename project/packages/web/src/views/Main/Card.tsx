import Link from 'next/link';
import { Card as CardItem } from 'antd';
import { Row } from './Row';

function MoreButton(category) {
  return <Link href={`/category/${category}`}>더보기</Link>;
}

export default function Card({ category, posts, ...rest }) {
  const postsNum = posts.length;
  const emptyRows = postsNum < 5 ? Array(5 - postsNum).fill(null) : [];
  const sliced = postsNum > 5 ? posts.slice(postsNum - 5, postsNum) : posts;

  return (
    <CardItem title={category} extra={MoreButton(category)} {...rest}>
      {sliced.map(({ title, id }) => (
        <Row key={title} category={category} title={title} id={id} />
      ))}
      {emptyRows.map((_, idx) => (
        <div className={'card-row'} key={idx} />
      ))}
    </CardItem>
  );
}
