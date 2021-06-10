import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Button } from 'antd';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '@src/gql/create-comment';

export default function Submit({ title, postId, addCommentList }) {
  const [content, setContent] = React.useState('');
  const [createComment] = useMutation(CREATE_COMMENT);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    const { data } = await createComment({
      variables: { input: { content, post_id: postId } },
    });
    setContent('');
    data && addCommentList(data.createComment);
  };

  return (
    <>
      <TextArea
        value={content}
        onChange={handleChange}
        placeholder={'댓글을 입력하세요'}
        autoSize={{ minRows: 3, maxRows: 5 }}
        className={'comments-textarea'}
      />
      <Button
        type={'primary'}
        size={'large'}
        onClick={handleSubmit}
        className={'comments-submit-button'}
      >
        {title}
      </Button>
    </>
  );
}
