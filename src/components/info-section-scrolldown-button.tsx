'use client'

import React from 'react'

export const InfoSectionScrollDownButton = () => {
  function handleScrollDown() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <button
      className="absolute -right-20 bottom-20 -rotate-90"
      onClick={handleScrollDown}
    >
      Scroll Down
    </button>
  )
}
