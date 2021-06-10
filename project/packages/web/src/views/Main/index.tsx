import Card from '@src/views/Main/Card';

export default function Main({ categories, posts }) {
  return (
    <div className={'outer-container main-card-container'}>
      {categories?.map((category) => {
        const filtered = posts.filter((post) => post.category === category);
        return (
          <Card
            key={category}
            category={category}
            posts={filtered}
            className={'main-card'}
          />
        );
      })}
    </div>
  );
}
