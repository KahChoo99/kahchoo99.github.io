'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function AwardsGallery({ awards }) {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Awards</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => a.image && setSelected(a)}
            className="cursor-pointer nature-card p-4 hover:shadow-md transition-shadow border-l-4 border-leaf-400"
          >
            <h4 className="font-semibold text-base text-leaf-700 dark:text-leaf-300">
              {a.title}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {a.org}{a.location ? ` · ${a.location}` : ''}
            </p>
            {a.details && (
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {a.details}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full p-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.image}
                alt={selected.title}
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-contain w-full h-auto"
              />
              <p className="mt-3 text-center text-sm text-white">{selected.title}</p>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-4 text-white text-2xl hover:text-leaf-300"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
