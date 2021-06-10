import React, { useState } from 'react';
import { Card } from 'antd';

import Submit from './Submit';
import Comment from './Comment';

export default function CommentsContainer({ comments, postId }) {
  const [tempComments, setTempComments] = useState(comments);
  const commentsNum = tempComments?.length;

  const addCommentList = (data) => {
    setTempComments((prev) => [...prev, data]);
  };

  React.useEffect(() => {
    comments && setTempComments(comments);
  }, [comments]);

  return (
    <Card className={'post-comments'}>
      <h1 className={'post-comments-num'}>{`COMMENTS (${commentsNum})`}</h1>
      {tempComments?.map(({ author, content, created_date }, idx) => (
        <Comment
          key={created_date}
          author={author}
          content={content}
          created_date={created_date}
          idx={idx}
          commentsNum={commentsNum}
        />
      ))}
      <Submit title={'작성'} postId={postId} addCommentList={addCommentList} />
    </Card>
  );
}
