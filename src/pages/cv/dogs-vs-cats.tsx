import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import styles from './dogs-vs-cats.less';
import DogsVsCatsUpload from './DogsVsCatsUpload';

export default (): React.ReactNode => (
  <PageContainer>
    <Card title="请上传图片进行猫狗分类">
      <DogsVsCatsUpload />
    </Card>
  </PageContainer>
);
