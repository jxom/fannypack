/* eslint-disable react/prop-types */

import * as React from 'react';
import { Box } from '../primitives';

class OutsideClickHandler extends React.Component {
  componentDidMount = () => {
    // `capture` flag is set to true so that a `stopPropagation` in the children
    // will not prevent all outside click handlers from firing - maja
    // @ts-ignore
    this.clickHandle = window.addEventListener('click', this.onOutsideClick);
  };

  componentWillUnmount = () => {
    // @ts-ignore
    if (this.clickHandle) {
      // @ts-ignore
      window.removeEventListener(this.clickHandle);
    }
  };

  onOutsideClick = e => {
    // @ts-ignore
    const { onOutsideClick } = this.props;
    // @ts-ignore
    const { childNode } = this;
    const isDescendantOfRoot = childNode && childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      onOutsideClick(e);
    }
  };

  setChildNodeRef = ref => {
    // @ts-ignore
    this.childNode = ref;
  };

  render = () => {
    return <Box ref={this.setChildNodeRef}>{this.props.children}</Box>;
  };
}

// @ts-ignore
OutsideClickHandler.defaultProps = {
  children: <span />,
  onOutsideClick: () => {}
};

export default OutsideClickHandler;
