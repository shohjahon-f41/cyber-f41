import * as React from "react"
const AccesIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M14 26h-2a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4ZM36 26h-2a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4Z" />
      <path d="M8 30v-6a16 16 0 1 1 32 0v6" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default AccesIcon

