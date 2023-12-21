import { Button, Typography } from 'antd';
import React, { useState } from 'react';
const { Title, Paragraph } = Typography;

function App() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ backgroundColor: '#e6f7ff', padding: '20px', textAlign: 'center' }}>
      <Title level={2}>React TypeScript App with Ant Design</Title>
      <Paragraph>Число: {count}</Paragraph>
      <Button type='primary' onClick={increaseCount}>
        Увеличить
      </Button>
      <Button type='primary' danger onClick={decreaseCount}>
        Уменьшить
      </Button>
    </div>
  );
}

export default App;
