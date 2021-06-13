import { useRouter } from 'next/router';
import { makeArticleURLWithNumber } from '@src/shared/functions';
import {  Popover } from 'antd';


export const Row = ({ category, title, id, content}) => {
  const router = useRouter();
  const sliced = title.length > 20 ? title.substr(0, 20) + '...' : title;

  const handleClickArticle = () => {
    const URL = makeArticleURLWithNumber(category, id);
    router.push(URL);
  };

  return (
    <Popover title={title} content={content} >
    <div className={'card-row has-content'} onClick={handleClickArticle} >
      <h2 className={'card-row-title'}>{sliced}</h2>
      <span className={'card-row-recomment'}>{'?'}</span>
    </div>
    </Popover>
  );
};
