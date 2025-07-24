import * as React from "react"
const CameraIcon = (props) => (
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
      <path d="M10 14h2a4 4 0 0 0 4-4 2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 4 4 0 0 0 4 4h2a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4" />
      <path d="M24 32a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default CameraIcon
