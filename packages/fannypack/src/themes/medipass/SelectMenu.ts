import { css, palette, space } from '../../styled';
import { isInteractive } from '../../Button/styled';

export default {
  ActionButton: {
    base: css`
      height: ${space(2)}rem;
    `
  },
  Button: {
    base: css`
      border: 1px solid #bdbdbd;
      color: ${palette('text')};
      height: ${space(11)}rem;
      padding: 0.4em 1.8em 0.4em 0.6em;
      text-transform: unset;
      ${props =>
        isInteractive(props) &&
        css`
          &:hover {
            background-color: unset;
            color: unset;
          }
          &:focus {
            background-color: unset;
            color: unset;
            border: 1px solid ${palette('primary')};
            outline: unset;
            box-shadow: ${palette('primary')} 0px 0px 0px 1px !important;
          }
        `};
    `
  },
  LoadingSpinner: {
    base: css`
      top: 13px;
    `
  },
  Tag: {
    base: css`
      border-radius: 0px;
      background-color: ${palette('secondary')};
      & button {
        &:hover {
          background-color: ${palette('secondary700')};
        }
        &:focus,
        &:hover:focus {
          background-color: ${palette('secondary700')};
          box-shadow: inset ${palette('secondary')} 0px 0px 0px 2px;
          outline-color: ${palette('secondary')};
        }
      }
    `
  }
};
