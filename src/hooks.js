import { useState, useEffect } from 'react'

export const useAnimatedScale = (scGap = 0.02, delayInMs = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const intervalId = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (scale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(intervalId)
                    }
                }, delayInMs)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
          setW(window.innerWidth)
          setH(winodw.innerHeight)
        }
        return () => {
            window.onresize = () => {
                
            }
        }

    })
}