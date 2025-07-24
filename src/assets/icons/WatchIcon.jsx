import * as React from "react"
const WatchIcon = (props) => (
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
        d="M30 12H18a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V18a6 6 0 0 0-6-6ZM18 36v6h12v-6M18 12V6h12v6"
      />
      <path d="M20.714 18v11M24.714 23v6M28.714 21v8" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default WatchIcon