import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import styled from 'reakit/styled';
// @ts-ignore
import Box from 'reakit/Box';

import { ButtonType, buttonTypePropType, Size, sizePropType } from '../types';
// @ts-ignore
import Spinner from '../Spinner';
import _Button from './styled';

const Text = styled.span`
  align-items: center;
  display: inline-flex;
`;
export const SpinnerWrapper = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  & + ${Text} {
    opacity: 0;
  }
`;

export interface ButtonProps {
  use?: any;
  /** Specifies that the button should have focus when the page loads. */
  autoFocus?: boolean;
  children: React.ReactNode;
  className?: string;
  /** Makes the button disabled. The user is unable to interact with the button. */
  disabled?: boolean;
  id?: string;
  /** Adds a loading indicator to the button. */
  isLoading?: boolean;
  /** Makes the button not interactable. */
  isStatic?: boolean;
  kind?: ButtonType;
  /** Callback when clicked */
  onClick?(): void;
  /** Callback when button becomes focussed */
  onFocus?(): void;
  /** Callback when focus leaves button */
  onBlur?(): void;
  palette?: string;
  size?: Size;
  type?: string;
}

const defaultProps: Partial<ButtonProps> = {
  use: undefined,
  autoFocus: false,
  className: undefined,
  disabled: false,
  id: undefined,
  isLoading: false,
  isStatic: false,
  kind: 'default',
  onClick: undefined,
  onFocus: undefined,
  onBlur: undefined,
  palette: 'default',
  size: 'default',
  type: 'button'
};

export const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  disabled,
  isLoading,
  isStatic,
  kind,
  palette,
  size,
  ...props
}) => {
  return (
    <_Button
      className={className}
      disabled={disabled}
      isLoading={isLoading}
      isStatic={isStatic}
      kind={kind}
      palette={palette}
      size={size}
      {...props}
    >
      {isLoading ? (
        <React.Fragment>
          <SpinnerWrapper>
            <Spinner color={kind === 'default' ? `${palette || ''}Inverted` : palette} />
          </SpinnerWrapper>
          <Text>{children}</Text>
        </React.Fragment>
      ) : (
        children
      )}
    </_Button>
  );
};

Button.propTypes = {
  use: PropTypes.any,
  autoFocus: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  isStatic: PropTypes.bool,
  kind: buttonTypePropType,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  palette: PropTypes.string,
  size: sizePropType,
  type: PropTypes.string
};
Button.defaultProps = defaultProps;

export default Button;
