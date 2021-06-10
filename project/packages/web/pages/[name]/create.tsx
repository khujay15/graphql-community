import React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '@src/gql/create-post';
import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import { CreateButtons, CreateInputs } from '@src/views/Create';

export default function CreatePage() {
  const router = useRouter();
  const [createPost] = useMutation(CREATE_POST);
  const [form] = Form.useForm();
  const [contents, setContents] = React.useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setContents({
      ...contents,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = contents;
    const {
      query: { name },
    } = router;

    if (!(title && description)) {
      alert('필수항목을 모두 입력해주세요');
      return;
    }

    const { data } = await createPost({
      variables: {
        input: {
          category: name,
          content: description,
          title,
        },
      },
    });

    router.push(`/${name}/article?num=${data.createPost.id}`);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className={'outer-container create-container'}>
      <div className={'form-container'}>
        <Form form={form} layout={'vertical'}>
          <CreateInputs
            forms={[
              {
                form: {
                  label: '글제목',
                  tooltip: '게시글 제목은 필수항목입니다',
                },
                input: {
                  Item: Input,
                  value: 'title',
                  onChange: handleChange,
                },
              },
              {
                form: {
                  label: '글내용',
                  tooltip: '게시글의 내용은 필수항목입니다',
                },
                input: {
                  Item: TextArea,
                  value: 'description',
                  id: 'form-textarea',
                  onChange: handleChange,
                },
              },
            ]}
          />
          <CreateButtons
            buttons={[
              {
                title: 'Submit',
                onClick: handleSubmit,
                type: 'primary',
                className: 'form-button submit-button',
              },
              {
                title: 'Cancel',
                onClick: handleCancel,
                className: 'form-button cancel-button',
              },
            ]}
          />
        </Form>
      </div>
    </div>
  );
}
