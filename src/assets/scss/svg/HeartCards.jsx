import * as React from "react"
const HeartCards = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#919191"
      strokeOpacity={0.77}
      strokeWidth={1.4}
      d="m6.268 18.544 9.38 8.813c.325.305.487.457.685.457.198 0 .36-.152.685-.457l9.381-8.813a6.938 6.938 0 0 0 .732-9.31l-.413-.53c-2.624-3.383-7.892-2.816-9.736 1.048a.719.719 0 0 1-1.297 0C13.84 5.888 8.572 5.32 5.948 8.703l-.413.532a6.938 6.938 0 0 0 .732 9.31Z"
    />
  </svg>
)
export default HeartCards