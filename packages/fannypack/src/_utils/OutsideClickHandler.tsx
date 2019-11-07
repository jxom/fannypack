// @ts-nocheck

/* eslint-disable react/prop-types */

import * as React from 'react';
import { Box } from '../primitives';

class OutsideClickHandler extends React.Component {
  componentDidMount = () => {
    // `capture` flag is set to true so that a `stopPropagation` in the children
    // will not prevent all outside click handlers from firing - maja
    this.clickHandle = window.addEventListener('click', this.onOutsideClick);
  };

  componentWillUnmount = () => {
    if (this.clickHandle) {
      window.removeEventListener(this.clickHandle);
    }
  };

  onOutsideClick = e => {
    const { onOutsideClick } = this.props;
    const { childNode } = this;
    const isDescendantOfRoot = childNode && childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      onOutsideClick(e);
    }
  };

  setChildNodeRef = ref => {
    this.childNode = ref;
  };

  render = () => {
    return <Box ref={this.setChildNodeRef}>{this.props.children}</Box>;
  };
}

OutsideClickHandler.defaultProps = {
  children: <span />,
  onOutsideClick: () => {}
};

export default OutsideClickHandler;
