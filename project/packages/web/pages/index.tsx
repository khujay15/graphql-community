import { useQuery } from '@apollo/client';

import { GET_ALL_POSTS } from '@src/gql/get-all-posts';

import Main from '@views/Main';

export default function IndexPage() {
  const { error, data } = useQuery(GET_ALL_POSTS);
  if (error) console.log(JSON.stringify(error, null, 2));

  let categories = [];
  let getAllPosts = data?.getAllPosts || [];

  getAllPosts.forEach((post) => {
    if (!categories.find((category) => post.category === category)) {
      categories.push(post.category);
    }
  });

  return <Main categories={categories} posts={getAllPosts} />;
}
