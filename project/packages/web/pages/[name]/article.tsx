import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_POST_WITH_COMMENTS } from '@src/gql/post-with-comments';
import Content from '@src/views/Post/Content';
import Comments from '@src/views/Post/Comment';

export default function ArticlePage() {
  const { query } = useRouter();

  if (!query.num) {
    return null; // or redirect 404 ?
  }

  const { error, data } = useQuery(GET_POST_WITH_COMMENTS, {
    variables: {
      post_id: Number(query.num),
      inputComment: { post_id: Number(query.num) },
    },
  });
  if (error) console.log(JSON.stringify(error, null, 2));

  const post = data?.getPost || {};

  return (
    <div className={'outer-container post-container'}>
      <Content {...post} />
      <Comments comments={data?.getSomeComments || []} postId={post.id} />
    </div>
  );
}
