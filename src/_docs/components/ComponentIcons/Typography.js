import React from 'react';

const SvgComponent = props => (
  <svg width={62} height={56} fill="none" {...props}>
    <path
      d="M2.6 17.48h18.96v6.08H11.2v5.56h9.6v5.04h-9.6V45H2.6V17.48zM38.6 17.48h9.92c4.107 0 7.28.8 9.52 2.4 2.267 1.6 3.4 3.84 3.4 6.72 0 1.813-.56 3.4-1.68 4.76-1.093 1.36-2.6 2.413-4.52 3.16-1.893.72-4 1.08-6.32 1.08h-1.68V45H38.6V17.48zm10.36 12.56c1.413 0 2.507-.293 3.28-.88.773-.587 1.16-1.44 1.16-2.56s-.387-1.96-1.16-2.52c-.747-.56-1.84-.84-3.28-.84h-1.72v6.72c.533.053 1.107.08 1.72.08z"
      fill="#444bc9"
    />
    <path fill="#212121" d="M22 27h1v9h-1zM36 27h1v9h-1z" />
    <path fill="#212121" d="M22 32v-1h14v1z" />
  </svg>
);

export default SvgComponent;
