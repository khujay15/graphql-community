import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '@src/gql/get-all-posts';

const { Header: HeaderContainer } = Layout;

export default function Header() {
  const [selected, setSelected] = useState(null);
  const { query } = useRouter();

  const { error, data } = useQuery(GET_ALL_POSTS);
  if (error) console.log(JSON.stringify(error, null, 2));

  let list = [];
  let getAllPosts = data?.getAllPosts || [];

  getAllPosts.forEach((post) => {
    if (!list.find((category) => post.category === category)) {
      list.push(post.category);
    }
  });

  useEffect(() => {
    setSelected(query.name || '/');
  }, [query]);

  return (
    <HeaderContainer className={'app-header'}>
      <Menu
        overflowedIndicator={<MenuOutlined className={'header-hbg-menu'} />}
        theme={'dark'}
        mode={'horizontal'}
        selectedKeys={[selected]}
      >
        {/* logo */}
        <Menu.Item key={'/'}>
          <Link href={'/'}>
            <a
              style={{
                float: 'left',
                width: '120px',
                height: '31px',
                margin: '16px 24px 16px 0',
                background: 'rgba(255, 255, 255, 0.3)',
              }}
            />
          </Link>
        </Menu.Item>
        {list.map((item) => (
          <Menu.Item key={item} className={'header-item'}>
            <Link href={`/category/${item}`}>
              <a>{item}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </HeaderContainer>
  );
}
