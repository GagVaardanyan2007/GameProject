import React, { useEffect } from 'react'
import newsGenerate from '../../data/sections/sportRadarAPI'

export default function News() {
    useEffect(() => {
        newsGenerate();
      }, []); 
  return (
    <div>
      
    </div>
  )
}
