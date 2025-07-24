import * as React from "react"
const PhoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g stroke="#000" clipPath="url(#a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M33.375 5.25h-18.75a2.344 2.344 0 0 0-2.344 2.344v32.812a2.344 2.344 0 0 0 2.344 2.344h18.75a2.344 2.344 0 0 0 2.344-2.344V7.594a2.344 2.344 0 0 0-2.344-2.344Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M22 6h4.688"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M24 37.719v.021"
      />
      <path strokeWidth={2} d="M13 34h22" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default PhoneIcon