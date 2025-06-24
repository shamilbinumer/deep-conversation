'use client' // Add this if using Next.js 13+ with app directory

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      offset: 100, // Offset from the original trigger point
      easing: 'ease-in-out', // Easing function
    })
  }, [])

  return null
}

export default AOSInit