import { Spin, Space } from 'antd';

export const startLoading = () => {
  const element = document.getElementById('app-loader');

  element.style.display = 'flex';
};

export const finishLoading = () => {
  const element = document.getElementById('app-loader');

  element.style.display = 'none';
};

export default function Loader() {
  return (
    <Space
      id={'app-loader'}
      size="middle"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <Spin size="large" />
    </Space>
  );
}
