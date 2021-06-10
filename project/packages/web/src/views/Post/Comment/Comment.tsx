import React, { useState } from 'react';
import { Comment as CommentItem, Divider } from 'antd';

import Profile from './Profile';
import Datetime from './Datetime';
import Like from './Like';
import Dislike from './Dislike';

export default function Comment({
  author,
  content,
  created_date,
  idx,
  commentsNum,
}) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  return (
    <>
      <CommentItem
        actions={[
          Like({ action, like, likes }),
          Dislike({
            action,
            dislike,
            dislikes,
          }),
        ]}
        author={<a>{author}</a>}
        avatar={Profile({ src: '', author })}
        content={<div dangerouslySetInnerHTML={{ __html: content }} />}
        datetime={Datetime({ created_date })}
      />
      {commentsNum - 1 !== idx && <Divider />}
    </>
  );
}
