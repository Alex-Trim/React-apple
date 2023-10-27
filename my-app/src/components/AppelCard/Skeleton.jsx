import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#ebebeb"
    foregroundColor="#f5f5f5"
    {...props}
  >
    <circle cx="133" cy="95" r="95" /> 
    <rect x="0" y="217" rx="10" ry="10" width="280" height="15" /> 
    <rect x="-1" y="245" rx="8" ry="8" width="280" height="88" /> 
    <rect x="86" y="300" rx="0" ry="0" width="3" height="0" /> 
    <rect x="0" y="345" rx="12" ry="12" width="95" height="30" /> 
    <rect x="124" y="345" rx="10" ry="10" width="152" height="30" />
  </ContentLoader>
)

export default Skeleton