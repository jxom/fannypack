import React from 'react';

const SvgComponent = props => (
  <svg width={120} height={60} fill="none" {...props}>
    <path fill="#4F4F4F" d="M0 0h120v60H0z" />
    <rect x={18.5} y={11.5} width={83} height={36} rx={3.5} fill="#fff" stroke="#212121" />
    <rect x={30} y={20} width={28} height={4} rx={2} fill="#3926A5" />
    <rect x={30} y={28} width={60} height={4} rx={2} fill="#3926A5" />
    <rect x={30} y={36} width={60} height={4} rx={2} fill="#3926A5" />
  </svg>
);

export default SvgComponent;
