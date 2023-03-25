'use client'
import { useState } from 'react'

export default function LikeButton () {
  const [liked, setLiked] = useState<Boolean>(false)
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '<3' : '<|3'}
    </button>
  )
};
