import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

const Layout = styled.main`
  background-color: pink;
`;

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home(): ReactElement {
  return (
    <Layout>
      <Title>test</Title>
    </Layout>
  );
}
