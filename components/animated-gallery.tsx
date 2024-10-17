'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageIcon, X } from 'lucide-react'

// Actual image URLs (replace with your desired image URLs)
const images = [
  'https://i.ibb.co/vQPfNPW/IMG-20241015-WA0001.jpg',
  'https://i.ibb.co/VBtY6Ht/IMG-20241015-WA0002.jpg',
  'https://i.ibb.co/RSZnqKk/IMG-20241015-WA0003.jpg',
  'https://i.ibb.co/V36DmdX/IMG-20241015-WA0007.jpg',
  'https://i.ibb.co/zJmrgZQ/IMG-20241015-WA0008.jpg',
  'https://i.ibb.co/5Gs8VX7/IMG-20241015-WA0009.jpg',
  'https://i.ibb.co/z2bdCpP/IMG-20241015-WA0010.jpg',
  'https://i.ibb.co/p6H0tmq/IMG-20241015-WA0011.jpg',
  'https://i.ibb.co/xz82gP0/IMG-20241015-WA0012.jpg',
  'https://i.ibb.co/NNB9vZ9/IMG-20241015-WA0013.jpg',
  'https://i.ibb.co/0BjhhKN/IMG-20241015-WA0014.jpg',
  'https://i.ibb.co/kQTwjJR/IMG-20241015-WA0015.jpg',
  'https://i.ibb.co/4TTRym9/IMG-20241015-WA0016.jpg',
  'https://i.ibb.co/kgf029p/IMG-20241015-WA0017.jpg',
  'https://i.ibb.co/s5T7JW1/IMG-20241015-WA0018.jpg',
  'https://i.ibb.co/Bsprcm1/IMG-20241015-WA0019.jpg',
  'https://i.ibb.co/Gc60QZF/IMG-20241015-WA0020.jpg',
  'https://i.ibb.co/7VqF5dF/IMG-20241015-WA0021.jpg',
  'https://i.ibb.co/MRChz6c/IMG-20241015-WA0022.jpg',
  'https://i.ibb.co/LJYyTQX/IMG-20241015-WA0023.jpg',
  'https://i.ibb.co/hFXqmp9/IMG-20241015-WA0024.jpg',
  'https://i.ibb.co/9vR1zVq/IMG-20241015-WA0025.jpg',
  'https://i.ibb.co/BBykpdY/IMG-20241015-WA0026.jpg',
  'https://i.ibb.co/yYMhhbD/IMG-20241015-WA0027.jpg',
  'https://i.ibb.co/h85MRsr/IMG-20241015-WA0028.jpg',
  'https://i.ibb.co/99vVgxt/IMG-20241015-WA0029.jpg',
  'https://i.ibb.co/LR4Lc34/IMG-20241015-WA0031.jpg',
  'https://i.ibb.co/XxJJnn0/IMG-20241015-WA0032.jpg',
  'https://i.ibb.co/HhLzCt1/IMG-20241015-WA0033.jpg',
  'https://i.ibb.co/8r0m83r/IMG-20241015-WA0034.jpg',
  'https://i.ibb.co/nCkQkPt/IMG-20241015-WA0036.jpg',
  'https://i.ibb.co/kXsP47r/IMG-20241015-WA0037.jpg',
  'https://i.ibb.co/F7FLYwN/IMG-20241015-WA0038.jpg',
  'https://i.ibb.co/FD871q0/IMG-20241015-WA0039.jpg',
  'https://i.ibb.co/kBDWhSB/IMG-20241015-WA0040.jpg',
  'https://i.ibb.co/9gzvr9Q/IMG-20241015-WA0041.jpg',
  'https://i.ibb.co/3R2N1HQ/IMG-20241015-WA0042.jpg',
  'https://i.ibb.co/KxQZznZ/IMG-20241015-WA0043.jpg',
  'https://i.ibb.co/zSrRz3j/IMG-20241015-WA0044.jpg'
]

export default function AnimatedGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null)

  const openFullscreen = useCallback((index: number) => {
    setFullscreenIndex(index)
  }, [])

  const closeFullscreen = useCallback(() => {
    setFullscreenIndex(null)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeFullscreen()
    }
  }, [closeFullscreen])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Wall Aura</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openFullscreen(index)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ImageIcon className="text-white w-12 h-12" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {fullscreenIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeFullscreen}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[fullscreenIndex]}
                alt={`Fullscreen view of image ${fullscreenIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeFullscreen}
              aria-label="Close fullscreen view"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}