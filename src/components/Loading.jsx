import React from 'react'
import { MorphingText } from "./MorphingText"


const texts = ["Wlecome","स्वागत", "أهلاً", "സ്വാഗതം"]

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <MorphingText texts={texts} />
    </div>
  )
}
export default Loading




