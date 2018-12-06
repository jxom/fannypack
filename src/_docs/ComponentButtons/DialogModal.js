import React from 'react';

const SvgComponent = props => (
  <svg width={105} height={60} fill="none" {...props}>
    <path fill="#3926A5" d="M0 0h105v60H0z" />
    <g clipPath="url(#prefix__clip0)">
      <path fill="#fff" d="M6 5h92.308v50H6z" />
      <path d="M6.385 19.583h91.538M6.385 42.083h91.538" stroke="#08175D" strokeLinecap="square" />
      <path
        d="M94.846 5.417H9.462c-1.7 0-3.077 1.492-3.077 3.333v42.5c0 1.841 1.377 3.333 3.077 3.333h85.384c1.7 0 3.077-1.492 3.077-3.333V8.75c0-1.84-1.377-3.333-3.077-3.333z"
        stroke="#08175D"
      />
      <path
        d="M73.126 12H15v2.807h58.126V12zM90.564 24.855H15v3.65h75.564v-3.65zM52.782 32.518H15v3.649h37.782v-3.65z"
        fill="#3926A5"
        fillOpacity={0.12}
      />
      <path
        d="M89.314 44.23H73.692c-.85 0-1.538.747-1.538 1.667v4.584c0 .92.689 1.666 1.538 1.666h15.622c.85 0 1.538-.746 1.538-1.666v-4.584c0-.92-.689-1.666-1.538-1.666z"
        fill="#3926A5"
        stroke="#08175D"
        strokeWidth={0.5}
      />
      <path d="M88.973 47.699H74.18v1.225h14.793V47.7z" fill="#fff" />
      <path
        d="M67.923 44.23h-15.77c-.849 0-1.538.747-1.538 1.667v4.584c0 .92.69 1.666 1.539 1.666h15.77c.849 0 1.537-.746 1.537-1.666v-4.584c0-.92-.688-1.666-1.538-1.666z"
        fill="#3926A5"
        fillOpacity={0.12}
        stroke="#08175D"
        strokeWidth={0.5}
      />
      <path d="M67.567 47.699H52.659v1.225h14.908V47.7z" fill="#3926A5" />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" transform="translate(6 5)" d="M0 0h92.308v50H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
