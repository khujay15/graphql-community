import { useQuery } from '@apollo/client';

import { GET_ALL_POSTS } from '@src/gql/get-all-posts';
import { useWindowSize } from '@src/hooks';

import Main from '@views/Main';

export default function IndexPage() {
  const [width] = useWindowSize()
  const { error, data } = useQuery(GET_ALL_POSTS, {variables: {skipContent: width < 1000}});
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
