import * as React from "react"
const AdressIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#000" rx={12} />
    <path
      fill="#fff"
      d="M11.695 4.5A5.697 5.697 0 0 0 6 10.224c0 3.955 4.08 7.582 5.335 8.542a.588.588 0 0 0 .75 0c1.257-.99 5.303-4.587 5.303-8.542A5.699 5.699 0 0 0 11.695 4.5Zm0 8.09a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z"
    />
  </svg>
)
export default AdressIcon
