import * as React from "react"
const DesktopIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g stroke="#000" strokeLinecap="round" strokeWidth={2} clipPath="url(#a)">
      <path
        strokeLinejoin="round"
        d="M40 8H8a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM14 40h20M18 32v8M30 32v8"
      />
      <path d="M6.857 27.429h34.286" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default DesktopIcon