import { css, palette } from '../../styled';

export default {
  base: css`
    border-bottom: none;
    margin-bottom: 1px;
  `,
  Tab: {
    base: css`
      height: 50px;
      text-transform: uppercase;
    `,
    active: css`
      background-color: transparent;
    `,
    hover: css`
      background-color: transparent;
      border-bottom: none;
      color: ${palette('primary')};
    `
  }
};
