import { css } from '../../styled';

export default {
  TooltipPopover: {
    base: css`
      background-color: rgb(255, 251, 217);
      line-height: 1.2;
    `
  },
  TooltipButton: {
    base: css`
      min-height: unset;
      height: unset;
      padding: 0.1em 0.2em;
      position: absolute;
      top: -0.75em;
      height: 22px;
    `
  },
  defaultProps: {
    tooltipPopoverProps: {
      gutter: 12
    }
  }
};
