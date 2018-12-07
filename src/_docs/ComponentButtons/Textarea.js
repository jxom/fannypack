import React from 'react';

const SvgComponent = props => (
  <svg width={100} height={50} fill="none" {...props}>
    <rect x={0.5} y={0.5} width={99} height={49} rx={3.5} stroke="#000" />
    <path fill="#3926A5" d="M97.071 40l1.06 1.06-7.07 7.072L90 47.07zM96.535 43l1.06 1.06-3.535 3.536-1.06-1.06z" />
  </svg>
);

export default SvgComponent;
