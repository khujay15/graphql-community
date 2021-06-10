import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { GET_SOME_POSTS } from '@src/gql/get-some-posts';

import Category from '@src/views/Category';

export default function CategoryPage() {
  const {
    query: { name },
  } = useRouter();

  const { error, data } = useQuery(GET_SOME_POSTS, {
    variables: {
      input: { category: name },
    },
  });

  if (error) console.log(JSON.stringify(error, null, 2));

  const getCategoryPosts = data?.getSomePosts || [];
  const articleList = getCategoryPosts.filter((post) => post.category === name);

  return <Category category={name} articleList={articleList} />;
}
