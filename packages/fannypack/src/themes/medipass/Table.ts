import { css, palette } from '../../styled';

export default {
  base: css`
    color: ${palette('text200')};
  `,
  Cell: {
    base: css`
      padding: 1rem 0.5rem;
    `
  },
  HeadCell: {
    base: css`
      color: ${palette('text100')};
      font-size: 12px;
      line-height: 2;
      margin-bottom: 0px;
      text-transform: uppercase;
    `
  }
};
