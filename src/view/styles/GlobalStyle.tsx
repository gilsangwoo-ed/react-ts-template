import React, { ReactElement } from 'react';

import { Global, css } from '@emotion/react';
import normalize from 'emotion-normalize';

import { base } from './base';

export default function GlobalStyle(): ReactElement {
  return (
    <Global
      styles={css`
        ${normalize}
        ${base}
      `}
    />
  );
}
