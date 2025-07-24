import * as React from "react"
const GameIcon = (props) => (
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
      clipPath="url(#a)"
    >
      <path
        strokeWidth={2}
        d="M40 12H8a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4ZM12 24h8m-4-4v8"
      />
      <path strokeWidth={3} d="M30 22v.02M36 26v.02" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default GameIcon
