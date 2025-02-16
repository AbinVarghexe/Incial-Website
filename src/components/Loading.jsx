import React from 'react'
import { HyperText } from "./HyperText"

const texts = ["Welcome", "स्वागत", "أهلاً", "സ്വാഗതം"]

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <HyperText texts={texts}>Welcome</HyperText>
    </div>
  )
}

export default Loading

