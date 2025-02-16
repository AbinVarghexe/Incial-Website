import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function HyperText({
  children,
  texts = [],
  className = "",
  as: Component = "div",
  ...props
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState(texts[0] || children)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }, 450)

    return () => clearInterval(interval)
  }, [texts.length])

  useEffect(() => {
    setCurrentText(texts[currentTextIndex])
  }, [currentTextIndex, texts])

  return (
    <Component
      className={`overflow-hidden py-2 text-5xl font-['NeueMontreal'] font-normal ${className}`}
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTextIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {currentText}
        </motion.div>
      </AnimatePresence>
    </Component>
  )
}

