import * as React from "react"
const HeartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 1C3.239 1 1 3.216 1 5.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C20.125 13.395 21 8.157 21 5.95 21 3.216 18.761 1 16 1s-5 3-5 3-2.239-3-5-3Z"
    />
  </svg>
)
export default HeartIcon