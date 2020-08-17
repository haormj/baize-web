import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 Haormj Baize"
    links={[
      {
        key: 'baize',
        title: 'baize',
        href: 'https://baize.haormj.xyz',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/haormj/baize-web',
        blankTarget: true,
      },
    ]}
  />
);
