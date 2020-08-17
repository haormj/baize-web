import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography, Alert, List } from 'antd';
import styles from './Welcome.less';

export default (): React.ReactNode => (
  <PageContainer>
    <Card>
      <Typography.Text>
        目标是将相关训练好的AI模型放到网站上，方便看到实际效果 <br />- 猫狗分类，基于vgg模型
      </Typography.Text>
    </Card>
  </PageContainer>
);
