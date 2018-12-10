import React from 'react';

const SvgComponent = props => (
  <svg width={84} height={37} fill="none" {...props}>
    <rect x={0.5} y={0.5} width={83} height={36} rx={3.5} stroke="#212121" />
    <rect x={12} y={9} width={28} height={4} rx={2} fill="#3926A5" />
    <rect x={12} y={17} width={60} height={4} rx={2} fill="#3926A5" />
    <rect x={12} y={25} width={60} height={4} rx={2} fill="#3926A5" />
  </svg>
);

export default SvgComponent;
